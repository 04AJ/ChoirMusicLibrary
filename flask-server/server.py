from flask import Flask


app = Flask(__name__)

# Intro Songs API Route


@app.route("/intro")
def intro():
    return {"introSongs": ["Shine in My Heart", "Come to the Altar", "Every Good Gift"]}


if __name__ == "__main__":
    app.run(debug=True)
