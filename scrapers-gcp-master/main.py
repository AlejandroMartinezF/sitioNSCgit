"""Main entrypoint for the MS functions"""
import logging
import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from flask import jsonify
from flask_api import status

# Only local usage #
# from flask import Blueprint, request
# scraper_app = Blueprint('scraper_app', __name__)
# End local usage #

_logger = logging.getLogger(__name__)


# @scraper_app.route('/Financiero-Scraper', methods=['GET', 'OPTIONS'])
# def search_financiero():
def search_financiero(request):
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    headers_res = {
        'Access-Control-Allow-Origin': '*'
    }

    url = "https://elfinanciero.com.mx/economia"

    payload = {}
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}

    r = requests.request("GET", url, headers=headers, data=payload)
    r.encoding = 'utf-8'

    text = r.text

    soup = BeautifulSoup(text, 'html.parser')

    paragraphs = soup.find_all(
        'div', {'class': 'column column-box is-12-mobile is-4-tablet'})

    results = []

    for paragraph in paragraphs:
        article = paragraph.find('a', {})
        url_path = "https://www.elfinanciero.com.mx{0}".format(article['href'])
        image = paragraph.find('img', {})

        results.append({
            "headline":   paragraph.text.replace('\n', '').replace('\r', ''),
            "link":       url_path,
            "newspaper":  "Financiero",
            "date":       datetime.now().strftime("%x"),
            "image":      "https://www.elfinanciero.com.mx{0}".format(image['src'])
        })

    paragraph = soup.find(
        'div', {'class': 'feed'})

    paragraphs = paragraph.find_all('a', {'class': ''})

    for paragraph in paragraphs:
        url_path = "https://www.elfinanciero.com.mx{0}".format(paragraph['href'])
        texts = paragraph.find_all('p')
        image = paragraph.find('img', {})

        results.append({
            "headline":   texts[1].text.replace('\n', '').replace('\r', ''),
            "link":       url_path,
            "newspaper":  "Financiero",
            "date":       datetime.now().strftime("%x"),
            "image":      "https://www.elfinanciero.com.mx{0}".format(image['src'])
        })

    return jsonify(results[:6]), status.HTTP_201_CREATED, headers_res


# @scraper_app.route('/Reuters-Scraper', methods=['GET', 'OPTIONS'])
# def search_reuters():
def search_reuters(request):
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    headers_res = {
        'Access-Control-Allow-Origin': '*'
    }

    url = "https://www.reuters.com/finance"

    payload = {}
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}

    r = requests.request("GET", url, headers=headers, data=payload)
    r.encoding = 'utf-8'

    text = r.text

    soup = BeautifulSoup(text, 'html.parser')

    paragraphs = soup.find_all(
        'article', {'class': 'story'})

    results = []

    for paragraph in paragraphs:
        article = paragraph.find('a', {})
        url_path = "https://www.reuters.com{0}".format(article['href'])
        image = paragraph.find('img', {})

        results.append({
            "headline":   paragraph.find('h3', {}).text.replace('\n', '').replace('\r', '').replace('\t', ''),
            "link":       url_path,
            "newspaper":  "Reuters",
            "date":       datetime.now().strftime("%x"),
            "image":      image['org-src']
        })

    return jsonify(results[:6]), status.HTTP_201_CREATED, headers_res


# @scraper_app.route('/NSC-Scraper', methods=['GET', 'OPTIONS'])
# def search_reuters():
def search_nsc6(request):
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    headers_res = {
        'Access-Control-Allow-Origin': '*'
    }

    url = "https://tokenappnsc.azurewebsites.net/api/nsc6news"

    payload = {}

    response = requests.request("GET", url, data=payload).json()

    return jsonify(response), status.HTTP_201_CREATED, headers_res
