
movies = [
    {"id": 1, "Home Alone": "director": "Rod Daniel", "year": 1990}
]

@app.route('/movies', methods=['GET'])
def get_movies():
    return jsonify(movies)

@app.route('/movies/<int:movie_id>', methods=['GET'])
def get_movie(movie_id):
    movie = next((movie for movie in movies if movie['id'] == movie_id), None)
    if movie:
        return jsonify(movie)
        app.route('/movies/<int:movie_id>', methods=['GET'])
def get_movie(movie_id):
    movie = next((movie for movie in movies if movie['id'] == movie_id), None)
    if movie:
        return jsonify(movie)
   


@app.route('/movies', methods=['POST'])
def add_movie():
    new_movie = request.json
    new_movie['id'] = max(movie['id'] for movie in movies) + 1
    movies.append(new_movie)
   


@app.route('/movies/<int:movie_id>', methods=['DELETE'])
def delete_movie(movie_id):
    global movies
    movies = [movie for movie in movies if movie['id'] != movie_id]
    return jsonify({'message': 'Movie deleted'}), 200
    @app.route('/movies/<int:movie_id>', methods=['PUT'])
    
    def update_movie(movie_id):
    movie = next((movie for movie in movies if movie['id'] == movie_id), None)
    if movie:
        data = request.json
        movie.update(data)
        return jsonify(movie), 200
    return jsonify({'error': 'Movie not found'}), 404

    //4


