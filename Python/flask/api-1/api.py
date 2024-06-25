from flask import Flask, jsonify

# Initialize Flask application
app = Flask(__name__)

# Sample data (you can replace this with data from a database or another source)
books = [
    {"id": 1, "title": "Python Programming", "author": "Guido van Rossum"},
    {"id": 2, "title": "JavaScript Programming", "author": "Brendan Eich"},
    {"id": 3, "title": "Java Programming", "author": "James Gosling"}
]

# GET API endpoint to fetch all books
@app.route('/api/books', methods=['GET'])
def get_books():
    return jsonify(books)

# Main function to run the application
if __name__ == '__main__':
    app.run(debug=True)