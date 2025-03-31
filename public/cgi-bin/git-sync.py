#!/usr/bin/env python3

import os
import sys
import json
import hmac
import hashlib
import subprocess
import cgi

# Load environment variables from .env file
def load_env(filepath):
    env = {}
    try:
        with open(filepath) as f:
            for line in f:
                if "=" in line:
                    key, value = line.strip().split("=", 1)
                    env[key] = value
    except FileNotFoundError:
        print("Content-Type: text/plain\n")
        print("Error: .env file not found")
        sys.exit(1)
    return env

env = load_env("/research/ug/ug2k23dual/ecd/gopal.kataria/.git-sync.env")

SECRET = env.get("GIT_SYNC_SECRET", "").encode()
REPO_PATH = env.get("REPO_PATH", "")

# Read request data
form = cgi.FieldStorage()
payload = form.file.read()
headers = {key: os.environ[key] for key in os.environ if key.startswith("HTTP_")}

# Verify GitHub Secret
github_secret = headers.get("HTTP_X_GITHUB_SECRET", "")
mac = hmac.new(SECRET, payload, hashlib.sha256).hexdigest()
if not hmac.compare_digest(mac, github_secret):
    print("Content-Type: text/plain\n")
    print("Unauthorized request")
    sys.exit(1)

# Change directory to repo and pull the latest code
# os.chdir(REPO_PATH)
result = subprocess.run(["git", "pull", "origin", "main", "--ff-only"], capture_output=True, text=True)

# Log output
with open("git-sync.log", "a") as log_file:
    log_file.write(result.stdout + "\n" + result.stderr + "\n")

# Print HTTP response
print("Content-Type: text/plain\n")
print("Git sync complete!\n" + result.stdout)
