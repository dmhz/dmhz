import socket
import threading
import http.server
import socketserver

class myHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_error(204)
        print(self.headers)

class MyTCPServer(socketserver.ThreadingTCPServer):
    def server_bind(self):
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR,1)
        self.socket.bind(self.server_address)

httpd = MyTCPServer(("", 808), myHandler)
httpd.serve_forever()
