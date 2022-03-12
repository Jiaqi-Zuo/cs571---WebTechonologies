from flask import Flask, request, render_template
from model import load

app = Flask(__name__)
app.debug = True

@app.route('/', methods=['GET','POST'])
def index():
    """ Displays the index page accessible at '/' """
    if request.method == "GET":
        return render_template('index.html')
    if request.method == "POST":
        result = None
        age = request.form.get("ageVal")
        weight = request.form.get("weightVal")
        result = load(age, weight)
    return render_template("index.html", result=result)

# @app.route("/gfg/", methods=['POST'])
# def gfg():

if __name__ == "__main__":
    app.run()