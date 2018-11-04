import requests

def handle(url):
    """handle a request to the function
    Args:
        req (str): request body
    """
    resp = requests.get(url)
    return resp.text
