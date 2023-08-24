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
import time
import json


captcha_number = 0

print("starting")
app = Flask(__name__)


log_dir = 'logs'
os.makedirs(log_dir, exist_ok=True)

log_file = os.path.join(log_dir, 'server.log')
logging.basicConfig(filename=log_file, level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

CORS(app)



import webbrowser
import os
import subprocess
import webbrowser
import time
import pyautogui
import time

import webbrowser
import os
import subprocess


def close_chrome():
    if os.name == 'nt':  # For Windows
        os.system('taskkill /im chrome.exe /f')
    else:  # For Mac and Linux
        os.system('killall chrome')

def bypass_cloudflare():
    # Path to the image file
    image_path = 'checkbox.png' 

    for i in range(10):
        print("looking up")
        # Find the coordinates of the image on the screen
        location = pyautogui.locateOnScreen(image_path)
        time.sleep(3)
        if location:
            # The locateOnScreen function returns a Box object, which is a named tuple of four integers: the x and y coordinates of the top-left corner of the box, and the width and height of the box.
            # We can calculate the center of the box to click on.
            x = location.left + location.width / 3
            y = location.top + location.height / 2
            print(x,y)

            pyautogui.moveTo(x, y, duration=2)
            time.sleep(2)
            pyautogui.click()
            print("clicked")
            time.sleep(2)
        else:
            print('Image not found on screen.')

@app.route('/open_url_in_chrome', methods=['POST'])
def open_url_in_chrome():
    close_chrome()
    time.sleep(20)
    url = 'https://it-ir-appointment.visametric.com/en'
    chrome_path = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
    subprocess.Popen([chrome_path, url])
    # bypass_cloudflare()
    return True
    #############3






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


@app.route('/getoffice')
def getoffice():
    html_code = '''
    <select name="office" id="office" class="form-control jvnsMt20 office">
        <option value="0" selected="selected">Application Center</option>
                <option value="1">TEHRAN</option>
        </select>
    '''
    return html_code


@app.route('/getofficetype')
def getofficetype():
    html_code = '''
    <select name="officetype" id="officetype" class="form-control jvnsMt20 officetype">
        <option value="0" selected="selected">Service Type</option>
                <option value="1">NORMAL</option>
                <option value="2">PREMIUM LOUNGE</option>
        </select>
    '''
    return html_code

@app.route('/getcity')
def getcity():
    html_code = '''
    <select name="city" id="city" class="form-control jvnsMt20 city">
        <option value="0" selected="selected">Place of Residence</option>
        <option value="9">AHWAZ</option>
        <option value="6">ARAK</option>
        <option value="7">ARDEBIL</option>
        <option value="12">BANDARABBAS</option>
        <option value="14">BIRJAND</option>
        <option value="11">BOJNORD</option>
        <option value="13">BUSHEHR</option>
        <option value="2">ESFEHAN</option>
        <option value="28">GORGAN</option>
        <option value="29">HAMEDAN</option>
        <option value="10">ILAM</option>
        <option value="25">KARAJ</option>
        <option value="26">KERMAN</option>
        <option value="27">KERMANSHAH</option>
        <option value="15">KHORAMABAD</option>
        <option value="4">MASHHAD</option>
        <option value="23">QAZVIN</option>
        <option value="24">QOM</option>
        <option value="16">RASHT</option>
        <option value="21">SANANDAJ</option>
        <option value="19">SARI</option>
        <option value="20">SEMNAN</option>
        <option value="22">SHAHREKORD</option>
        <option value="5">SHIRAZ</option>
        <option value="3">TABRIZ</option>
        <option value="1">TEHRAN</option>
        <option value="8">URUMIEH</option>
        <option value="30">YASUJ</option>
        <option value="31">YAZD</option>
        <option value="17">ZAHEDAN</option>
        <option value="18">ZANJAN</option>
    </select>
    '''

    return html_code



@app.route('/get_script')
def get_script():
    with open("robot-data.js") as f:
        script_code = f.read()
    
    return script_code



 
from bs4 import BeautifulSoup
import numpy as np

def create_array(html):
    pre = html
    lines = pre.split('\n')
    array = []
    for i, line in enumerate(lines):
        if line.strip() == '' or '</span>' not in line:
            continue
        row = np.zeros(80)
        spans = line.split('</span>')
        for j, span in enumerate(spans):
            if 'font-weight:bold' in span:
                row[j] = 1
        array.append(row)
    return np.array(array)

def decode_character(array, json):
    char = json[str(array)]
    return char

def decode_captcha_2(html, json):
    answer = ""
    array = create_array(html)
    for char_num in np.arange(0,8):
        char_array = array[:, char_num*10: (char_num*10)+10]
        answer += decode_character(char_array, json)
    return(answer)


@app.route('/decode_captcha', methods=['POST'])
def decode_captcha():
    data = request.get_json()  # or request.form
    html = data.get('html')
    with open('decoder.json', 'r') as f:
        decoder_json = json.load(f)
    decoded = decode_captcha_2(html, decoder_json)
    return jsonify({"status": "success", "decoded": decoded})


if __name__ == '__main__':
    app.run(debug=True)





