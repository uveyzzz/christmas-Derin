#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 8000
os.chdir('/workspaces/christmas-Derin')

Handler = http.server.SimpleHTTPRequestHandler

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Server running at http://localhost:{PORT}/")
        print("Press Ctrl+C to stop")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped")
