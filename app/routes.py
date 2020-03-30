from app import app

@app.route('/')
@app.route('/index')
def index():
    return "Navigator: The App for Rideshare"
