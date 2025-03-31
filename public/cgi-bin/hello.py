#!/usr/bin/env python3

import cgi
import os

print("Content-Type: text/html")  # Required header
print()  # Separate headers from body
print("<html>")
print("<head><title>CGI Script Example</title></head>")
print("<body>")
print("<h1>Hello, World!</h1>")
print("<p>This is a simple CGI script running on a web server.</p>")

# Display environment variables for debugging
print("<h2>Environment Variables</h2>")
print("<pre>")
for key, value in os.environ.items():
    print(f"{key}: {value}")
print("</pre>")

print("</body>")
print("</html>")
