#!/usr/bin/env python3
import os
import sys
import hmac
import hashlib
import subprocess
import cgi


def logerr( logfile , errr ):
    logfile.write(errr)
    logfile.write("\n")
    logfile.close()
    print(errr)
    # sys.exit(1)


def load_env(filepath):
    env = {}
    try:
        with open(filepath) as f:
            for line in f:
                line = line.strip()
                if line and "=" in line and not line.startswith("#"):
                    key, value = line.split("=", 1)
                    env[key] = value
    except FileNotFoundError:
        print("Content-Type: text/plain\n")
        print("Error: .env file not found")
        sys.exit(1)
    return env

# Set up response headers early
print("Content-Type: text/plain\n")

# Load environment variables
env_path = "/research/ug/ug2k23dual/ecd/gopal.kataria/.git-sync.env"
env = load_env(env_path)
SECRET = env.get("GIT_SYNC_SECRET", "").encode()
REPO_PATH = env.get("REPO_PATH", "")

# Change to repository directory
try:
    os.chdir(REPO_PATH)
except FileNotFoundError:
    print(f"Error: Repository path {REPO_PATH} not found")

logfile = open("git-sync.log" , "a")
logfile.write("log\n")

# Validate required configuration
if not SECRET or not REPO_PATH:
    logerr(logfile , "Variables not found")

# Read request data
form = cgi.FieldStorage()
if "file" not in form:
    logerr(logfile, "No payload recieved")

payload = form.getvalue("file", "").encode()
signature = os.environ.get("HTTP_X_GITHUB_SECRET", "")

# Verify GitHub signature
calculated_signature = hmac.new(SECRET, payload, hashlib.sha256).hexdigest()
if not hmac.compare_digest(calculated_signature, signature):
    logerr(logfile, "Unauthorized request")




# Pull the latest code
result = subprocess.run(["git", "pull", "--rebase", "origin", "main"] )
# Log output
logfile.write("Process done")
logfile.close()

print(result)
