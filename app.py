from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', title='Home')

@app.route('/about')
def about():
    return render_template('about.html', title='About')

@app.route('/signup')
def signup():
    return render_template('signup.html', title='Sign Up')

@app.route('/login')
def login():
    return render_template('login.html', title='Log In')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=80)