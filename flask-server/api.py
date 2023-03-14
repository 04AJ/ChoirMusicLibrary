from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
db = SQLAlchemy(app)


class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    composer = db.Column(db.Text, nullable=False)
    _key = db.Column(db.Text, nullable=False)
    lyrics = db.Column(db.Text, nullable=False)

    def __str__(self):
        return '<Title %r>' % self.title


# with app.app_context():
    # db.create_all()
    # todo = Todo(title='Fugue', composer='Bach',
    #             _key='A Major', lyrics="Dies Ires")
    # db.session.add(todo)
    # db.session.commit()


def todo_serializer(todo):
    return{
        'id': todo.id,
        'title': todo.title,
        'composer': todo.composer,
        '_key': todo._key,
        'lyrics': todo.lyrics

    }


@ app.route('/api', methods=['GET'])
def index():
    return jsonify([*map(todo_serializer, Todo.query.all())])


if __name__ == '__main__':
    app.run(debug=True)
