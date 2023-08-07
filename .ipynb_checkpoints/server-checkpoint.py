from flask import Flask, request, jsonify
import base64
import requests
import imgkit
from pdf2image import convert_from_path
import os
from flask_cors import CORS
import logging
import os
import subprocess
from flask import Flask, request, jsonify
from flask_cors import CORS
import imaplib
import email
from email.header import decode_header
from bs4 import BeautifulSoup

print("starting")
app = Flask(__name__)


log_dir = 'logs'
os.makedirs(log_dir, exist_ok=True)

log_file = os.path.join(log_dir, 'server.log')
logging.basicConfig(filename=log_file, level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

CORS(app)

@app.route('/solve_captcha', methods=['POST'])
def solve_captcha():
    html_element = request.json['html_element']
    # Modify the style of the <pre> element
    modified_html_element = html_element.replace('style="font-size: 6px; line-height: 6px;"', 'style="font-size: 13px; line-height: 13px;"')
    # Create a temporary HTML file with the HTML element
    with open('input.html', 'w') as f:
        f.write(modified_html_element)

    

    # Convert the HTML element to an image using wkhtmltoimage
    subprocess.run(['wkhtmltoimage', '--format', 'png', '--quality', '100', '--width', '0', '--height', '0', 'input.html', 'out.png'])
    logging.info('Done')

    # Read the image data
    with open('out.png', 'rb') as f:
        image_data = f.read()

    # Delete the temporary files
    # os.remove('input.html')
    # os.remove('out.png')

    # Encode the image data
    encoded_string = base64.b64encode(image_data).decode('utf-8')
    
    url = 'https://api.apitruecaptcha.org/one/gettext'
    data = { 
        'userid':'milad.mirzazadeh1378@gmail.com', 
        'apikey':'cpuJpawk0AHDbN2euwqJ',  
        'data':encoded_string
    }
    logging.info("sending to the truecaptcha")
    response = requests.post(url = url, json = data)
    result = response.json()
    logging.info(result)

    # Check the confidence of the result
    if result['confidence'] > 0.7:
        return jsonify({'text': result['result']})
    else:
        return jsonify({'error': 'Captcha solving failed'})
    


@app.route('/confirmation_code', methods=['POST'])
def confirmation_code():
    username = request.json['username']
    password = request.json['password']

    mail = imaplib.IMAP4_SSL("imap.mail.yahoo.com")
    mail.login(username, password)

    mailbox = "INBOX"
    mail.select(mailbox)

    result, data = mail.uid('search', None, "ALL")
    mail_ids = data[0].split()
    last_5_mail_ids = mail_ids[-5:]

    last_vs_message = None

    for mail_id in reversed(last_5_mail_ids):
        result, data = mail.uid('fetch', mail_id, '(RFC822)')
        raw_email = data[0][1]
        email_message = email.message_from_bytes(raw_email)

        email_from = str(decode_header(email_message['From'])[0][0]).strip()
        email_to = str(decode_header(email_message['To'])[0][0]).strip()
        if 'visametric' in email_from.lower() or 'visametric' in email_to.lower():
            last_vs_message = email_message
            break

    if last_vs_message:
        content_type = last_vs_message.get_content_type()
        if "text/html" in content_type:
            body = last_vs_message.get_payload(decode=True).decode()
            soup = BeautifulSoup(body, 'html.parser')
            h2_tags = soup.find_all('h2')

            if h2_tags[-1]:
                activation_code = h2_tags[-1].text.strip().replace(" ", "").replace("\n", "")
                return jsonify({"status": "success", "activation_code": activation_code})
            else:
                return jsonify({"status": "error", "message": "Activation code not found."})
        else:
            return jsonify({"status": "error", "message": "Email content is not in HTML format."})
    else:
        return jsonify({"status": "error", "message": "No message from Visametric found."})

if __name__ == '__main__':
    app.run(debug=True)