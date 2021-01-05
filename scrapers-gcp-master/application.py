"""In this file it will be creating the context of the current FlaskAPI environment
"""
from logging.config import dictConfig

from flask_api import FlaskAPI
from flask_cors import CORS


def create_app(debug: bool = False, testing: bool = False, **config_overrides) -> FlaskAPI:
    """This function handles the Flask API environment creation

    In the function the function will define all the context of the Flask
    including the registration of new blueprints

    Args:
        debug (boolean): Defines if the current instance is on development or staging phase
        testing (boolean): Defines id the current instance is on testing phase

    Return
        FlaskAPI - Returns the new instance of the application and environment
    """
    # Logger level
    logger_config = {
        'version': 1,
        'formatters': {
            'default': {
                'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s'
            }
        },
        'handlers': {
            'wsgi': {
                'class': 'logging.StreamHandler',
                'stream': 'ext://flask.logging.wsgi_errors_stream',
                'formatter': 'default'
            }
        },
        'root': {
            'handlers': ['wsgi']
        }
    }

    if debug:
        logger_config['root']['level'] = 'DEBUG'
    elif testing:
        logger_config['root']['level'] = 'INFO'
    else:
        logger_config['root']['level'] = 'WARNING'

    # Application creation
    app = FlaskAPI(__name__, static_url_path='', static_folder='widget')

    # CORS Configuration, when the production and staging envs
    # are up, it defines the only origins that can enter to the api
    CORS(app, resources={r'/*': {"origins": "*"}})

    # Set config environment
    app.debug = debug
    app.testing = testing

    # Minimum cache settings
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

    # Define parser for the response of requests
    app.config['DEFAULT_PARSERS'] = ['flask_api.parsers.JSONParser']

    # Apply overrides for tests
    app.config.update(config_overrides)

    # Blueprints registration
    from main import scraper_app

    app.register_blueprint(scraper_app, url_prefix='')

    return app
