from flask import Flask
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///songs.db'
db = SQLAlchemy(app)

# defining model


class SongModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    composer = db.Column(db.String(100), nullable=False)
    key = db.Column(db.String(10), nullable=False)
    lyrics = db.Column(db.String(1000), nullable=False)

    def __repr__(self):
        return '<Title %r>' % self.title

# ONLY RUN ONCE
# with app.app_context():
#     db.create_all()


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

song_update_args = reqparse.RequestParser()
song_update_args.add_argument(
    "title", type=str, help="Title of song is required")
song_update_args.add_argument(
    "composer", type=str, help="Composer of song is required")
song_update_args.add_argument(
    "key", type=str, help="Key of song is required")
song_update_args.add_argument(
    "lyrics", type=str, help="Lyrics of song is required")


# Serializing Objects
resource_fields = {
    'id': fields.Integer,
    'title': fields.String,
    'composer': fields.String,
    'key': fields.String,
    'lyrics': fields.String}


class Song(Resource):
    # marshal is to turn result object into JSON format
    @marshal_with(resource_fields)
    def get(self, song_id):
        # checks if song exists
        result = SongModel.query.filter_by(id=song_id).first()
        if not result:
            abort(404, message="Could't find video with that id...")
        return result

    @marshal_with(resource_fields)
    def put(self, song_id):
        args = song_put_args.parse_args()
        result = SongModel.query.filter_by(id=song_id).first()
        if result:
            abort(409, message="Song ID Taken...")

        song = SongModel(
            id=song_id, title=args['title'], composer=args['composer'], key=args['key'], lyrics=args['lyrics'])
        # temporarily adding song to db
        db.session.add(song)
        # permanently adding to db
        db.session.commit()
        return song, 201

    def patch(self, song_id):
        args = song_update_args.parse_args()
        result = SongModel.query.filter_by(id=song_id).first()
        if not result:
            abort(404, message="Song doens't exist, cannot update...")

        if args['title']:
            result.title = args['title']
        if args['composer']:
            result.composer = args['composer']
        if args['key']:
            result.key = args['key']
        if args['lyrics']:
            result.lyrics = args['lyrics']

        db.session.commit()
        return result

    @marshal_with(resource_fields)
    def delete(self, song_id):
        return '', 204


api.add_resource(Song, "/song/<int:song_id>")
# Intro Songs API route


@app.route("/intro")
def intro():
    return {"introSongs": ["Shine in My Heart", "Come to the Altar", "Every Good Gift"]}


if __name__ == "__main__":
    app.run(debug=True)
