from flask import Flask, render_template, request
import pickle
import requests
from flask_cors import CORS, cross_origin
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

with open('save_model_with_movie_id', 'rb') as file:
    model = pickle.load(file)

input_embeddings = []
for item in model['embeddings']:
    input_embeddings.append(item.tolist())

similarity_scores = cosine_similarity(input_embeddings)


def get_poster_url(movie_id):
    response = requests.get(
        'https://api.themoviedb.org/3/movie/{}?api_key=6c4a71563da95e15d06ef74df1422300'.format(movie_id))
    data = response.json()
    return "https://image.tmdb.org/t/p/original" + data['poster_path']


@app.route("/")
@cross_origin()
def run():
    input_movie = request.args.get("movie_name").lower()
    available_movies = model['title'].map(lambda x: x.lower()).tolist()
    result = []

    if input_movie in available_movies:
        input_movie_index = available_movies.index(input_movie)
        sorted_similarity_indices = (-similarity_scores[input_movie_index]).argsort()[:6]
        for ix in sorted_similarity_indices:
            if ix == input_movie_index:
                continue
            result.append({
                "title": model['title'][ix],
                "poster_url": get_poster_url(model['movie_id'][ix])
            })
    return result


if __name__ == "__main__":
    app.run()
