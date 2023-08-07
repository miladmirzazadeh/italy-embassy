

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

    while(1):
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



def open_url_in_chrome():
    close_chrome()
    time.sleep(2)
    url = 'https://it-ir-appointment.visametric.com/en'
    chrome_path = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
    subprocess.Popen([chrome_path, url])
    # bypass_cloudflare()
    return True







bypass_cloudflare()