from flask import Flask, request, Response, jsonify, abort, render_template, send_from_directory, send_file, stream_with_context
import flask
from flask_cors import CORS
import requests
import os
import sys

# Serve react frontend built with "npm run build"
app = Flask(__name__, static_folder="build/static", template_folder="build")
CORS(app)

@app.route("/", defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    path_dir = os.path.abspath("build")
    if path != "" and os.path.exists(os.path.join(path_dir, path)):
        return send_from_directory(path_dir, path)
    else:
        return render_template('index.html')
    # return render_template('index.html')


if __name__ == "__main__":
    app.debug = True
    if len(sys.argv) > 1:
        port = int(sys.argv[1])
    else:
        port = 3000
    app.run(host="0.0.0.0", port=port)
