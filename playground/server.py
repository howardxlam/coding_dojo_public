from flask import Flask, render_template  

app = Flask(__name__)   

@app.route('/')         
def index():
    return render_template("index.html", phrase="aavav", times=5)

# @app.route("/play")
# def play():
#     return render_template("play.html")

@app.route("/play/<int:num>/<string:color>")
def play(num, color):
    return render_template("play.html", num=num, color=color)

@app.errorhandler(404)
def error(error):
    return "Sorry! No response. Try again."


if __name__=="__main__":   
    app.run(debug=True)   

