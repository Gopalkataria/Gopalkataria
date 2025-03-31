#!/usr/bin/env python3

import os
import json
import cgi
import sys


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

env_path = "/research/ug/ug2k23dual/ecd/gopal.kataria/.git-sync.env"
env = load_env(env_path)
REPO_PATH = env.get("REPO_PATH", "")
COUNT_FILE = REPO_PATH+ "/var/visitor_count.json"

def get_visitor_count():
    if not os.path.exists(COUNT_FILE):
        return 0
    with open(COUNT_FILE, "r") as f:
        try:
            data = json.load(f)
            return data.get("count", 0)
        except json.JSONDecodeError:
            return 0

def increment_visitor_count():
    count = get_visitor_count() + 1
    with open(COUNT_FILE, "w") as f:
        json.dump({"count": count}, f)
    return count

# CGI response
print("Content-Type: application/json\n")
count = increment_visitor_count()
print(json.dumps({"visitor_count": count}))
