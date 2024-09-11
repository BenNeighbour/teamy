package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"
)

type Response struct {
	Message string `json:"message"`
}

func main() {
	// Parse command-line flags to initialize the environment.
	flag.Parse()

	// Define the handler function for the root route
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Create a response object
		response := Response{
			Message: "Hello, World!",
		}

		// Set the Content-Type header to application/json
		w.Header().Set("Content-Type", "application/json")

		// Encode the response as JSON and send it
		if err := json.NewEncoder(w).Encode(response); err != nil {
			http.Error(w, "Failed to encode response", http.StatusInternalServerError)
		}
	})

	// Define the server address and port
	addr := fmt.Sprintf(":%d", 8080)

	// Start the server and listen on the specified port
	log.Printf("server listening at %v", addr)
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
}
