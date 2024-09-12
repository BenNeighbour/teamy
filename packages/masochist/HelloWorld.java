package packages.masochist;

import java.io.*;
import java.net.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class HelloWorld {

    public static void main(String[] args) {
var formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");

try (ServerSocket serverSocket = new ServerSocket(8081)) {
    var timestamp = LocalDateTime.now().format(formatter);
    System.out.println(timestamp + " server listening at :8081");

    while (true) {
        try (Socket clientSocket = serverSocket.accept()) {
            timestamp = LocalDateTime.now().format(formatter);
            System.out.println(timestamp + " New client connected");

            // Write HTTP response headers and content
            var out = new PrintWriter(clientSocket.getOutputStream(), true);

            out.println("HTTP/1.1 200 OK");
            out.println("Content-Type: text/plain");
            out.println();
            out.println("Java:sdf Helsdafdsflo World sdfjdsafjdska sadfsdfjkl!");
        } catch (IOException e) {
            System.out.println("Error handling client connection: " + e.getMessage());
        }
    }
} catch (IOException e) {
    System.out.println("Server exception: " + e.getMessage());
}
    }
}
