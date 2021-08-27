from flask_sqlalchemy import SQLAlchemy
from create_app import app
import hashlib

#Configs the path to the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database/database.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

#Model that holds all the info for the users, a table in the database
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True )
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    biografia = db.Column(db.Text)
    photoURL = db.Column(db.String(120), unique=False, nullable=False)   
    name = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    idiomas = db.Column(db.String(80), unique=False)


    def __repr__(self):
        return '<User %r>' % self.username

    def get_number_of_users(self):
        return self.query.count()

    def add_user(self, username, email, password, idiomas, name, biografia="", photoURL=""):

        new_user = User(
            name=name,
            biografia=biografia,
            photoURL=photoURL,
            idiomas=self._list_to_string(idiomas),
            username=username, 
            email=email, 
            password=hashlib.sha256(password.encode('utf-8')).hexdigest(),
        )


        db.session.add(new_user)
        db.session.commit()

    def _list_to_string(self, list):
        string = ""
        for item in list:
            string += item + " "
        return string

db.create_all()
