from flask import Flask
from flask_restful import Api, Resource, reqparse, abort


app = Flask(__name__)
api = Api(app)

song_put_args = reqparse.RequestParser()
# help is the error messgae if arguement is invalid
song_put_args.add_argument(
    "title", type=str, help="Title of song is required", required=True)
song_put_args.add_argument(
    "composer", type=str, help="Composer of song is required", required=True)
song_put_args.add_argument(
    "key", type=str, help="Key of song is required", required=True)
song_put_args.add_argument(
    "lyrics", type=str, help="Lyrics of song is required", required=True)


songs = {}


def abort_if_dne(song_id):
    if song_id not in songs:
        abort(404, message="Could not find video...")


def abort_if_exists(song_id):
    if song_id in songs:
        abort(409, message="Video already exists with that ID...")


class Song(Resource):
    def get(self, song_id):
        abort_if_dne(song_id)
        return songs[song_id]

    def put(self, song_id):
        abort_if_exists(song_id)
        args = song_put_args.parse_args()
        songs[song_id] = args
        return songs[song_id], 201

    def delete(self, song_id):
        abort_if_dne(song_id)
        del songs[song_id]
        return '', 204


api.add_resource(Song, "/song/<int:song_id>")
# Intro Songs API route


@app.route("/intro")
def intro():
    return {"introSongs": ["Shine in My Heart", "Come to the Altar", "Every Good Gift"]}


if __name__ == "__main__":
    app.run(debug=True)
