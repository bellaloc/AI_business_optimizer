# Chatbot API Implementation

# Import necessary libraries
from flask import Flask, request, jsonify

class ChatbotAPI:
    def __init__(self, model):
        """
        Initialize the ChatbotAPI.

        Parameters:
        - model: The Chatbot model to be used for generating responses.
        """
        self.model = model
        self.app = Flask(__name__)

        @self.app.route('/chat', methods=['POST'])
        def chat():
            """
            Endpoint to handle chat requests.

            Expects JSON data with a key 'input' containing the user's input text.
            Returns a JSON response containing the chatbot's response.
            """
            data = request.get_json()
            input_text = data['input']
            response = self.model.respond(input_text)
            return jsonify({'response': response})

    def run(self):
        """
        Run the Flask app to start the chatbot API server.
        """
        self.app.run(debug=True)
