""" Server running file

This file create the flask application and starts the server
on the started environment
"""
import os

from application import create_app

debug = os.getenv('DEBUG', True)
host = os.getenv('IP', '0.0.0.0')
port = int(os.getenv('PORT', 8080))

app = create_app(debug)
