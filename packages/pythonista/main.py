import socket
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s %(message)s", datefmt="%Y/%m/%d %H:%M:%S"
)


def log_with_timestamp(message):
    logging.info(message)


def start_server():
    host = "localhost"
    port = 8083
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_socket:
        server_socket.bind((host, port))
        server_socket.listen()

        log_with_timestamp(f"server listening at :{port}")
        while True:
            client_socket, client_address = server_socket.accept()
            with client_socket:
                log_with_timestamp(f"New client connected from {client_address}")

                response = b"HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nPython:sdf Helsdafdsflo World sdfjdsafjdska sadfsdfjkl!"
                client_socket.sendall(response)


if __name__ == "__main__":
    start_server()
