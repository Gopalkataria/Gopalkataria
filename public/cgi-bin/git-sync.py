#!/usr/bin/env python3
import os
import sys
import hmac
import hashlib
import subprocess
import cgi

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

# Validate required configuration
if not SECRET or not REPO_PATH:
    print("Error: Missing required environment variables")
    sys.exit(1)

# Read request data
form = cgi.FieldStorage()
if "file" not in form:
    print("Error: No payload received")
    sys.exit(1)

payload = form.getvalue("file", "").encode()
signature = os.environ.get("HTTP_X_GITHUB_SECRET", "")

# Verify GitHub signature
calculated_signature = hmac.new(SECRET, payload, hashlib.sha256).hexdigest()
if not hmac.compare_digest(calculated_signature, signature):
    print("Unauthorized request")
    sys.exit(1)

# Change to repository directory
try:
    os.chdir(REPO_PATH)
except FileNotFoundError:
    print(f"Error: Repository path {REPO_PATH} not found")
    sys.exit(1)

# Pull the latest code
result = subprocess.run(
    ["git", "pull", "origin", "main", "--ff-only"],
    capture_output=True,
    text=True
)

# Log output
log_path = os.path.join(REPO_PATH, "git-sync.log")
with open(log_path, "a") as log_file:
    log_file.write(f"--- {os.environ.get('REMOTE_ADDR', 'Unknown')} - "
                  f"{os.environ.get('REQUEST_METHOD', 'Unknown')} "
                  f"{os.environ.get('PATH_INFO', '/')} ---\n")
    log_file.write(result.stdout + "\n" + result.stderr + "\n\n")

# Print response
print("Git sync complete!\n" + result.stdout)
#!/usr/bin/env python3
import os
import sys
import hmac
import hashlib
import subprocess
import cgi

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

# Validate required configuration
if not SECRET or not REPO_PATH:
    print("Error: Missing required environment variables")
    sys.exit(1)

# Read request data
form = cgi.FieldStorage()
if "file" not in form:
    print("Error: No payload received")
    sys.exit(1)

payload = form.getvalue("file", "").encode()
signature = os.environ.get("HTTP_X_GITHUB_SECRET", "")

# Verify GitHub signature
calculated_signature = hmac.new(SECRET, payload, hashlib.sha256).hexdigest()
if not hmac.compare_digest(calculated_signature, signature):
    print("Unauthorized request")
    sys.exit(1)

# Change to repository directory
try:
    os.chdir(REPO_PATH)
except FileNotFoundError:
    print(f"Error: Repository path {REPO_PATH} not found")

# Pull the latest code
result = subprocess.run(["git", "pull", "--rebase", "--autostash", "origin", "main"] )
# Log output

log_path = os.path.join(REPO_PATH, "git-sync.log")
#with open(log_path, "a") as log_file:
 #   log_file.write(f"--- {os.environ.get('REMOTE_ADDR', 'Unknown')} - "
  #                f"{os.environ.get('REQUEST_METHOD', 'Unknown')} "
   #               f"{os.environ.get('PATH_INFO', '/')} ---\n")
    #log_file.write(result.stdout + "\n" + result.stderr + "\n\n")

# Print response
print(result)
