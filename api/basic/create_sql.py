from flask_sqlalchemy import SQLAlchemy
from basic.create_app import app
import hashlib

#Configs the path to the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../database/database.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

#Default information for the missing content
DEFAULTSTRING = "Não há informações cadastradas neste tópico"

#Model that holds all the info for the users, a table in the database
class User(db.Model):
    #Creating all the columns on the User table
    id = db.Column(db.Integer, primary_key=True )
    username = db.Column(db.String(80), unique=True, nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    photoURL = db.Column(db.String(120), unique=False, nullable=False)   
    
    # Below are info that is not required
    endereco = db.Column(db.String(120), unique=False)
    biografia = db.Column(db.Text)
    idiomas = db.Column(db.String(80), unique=False)
    formacao_academica = db.Column(db.Text, unique=False)
    projetos = db.Column(db.Text, unique=False)
    atuacao_profissional = db.Column(db.Text, unique=False)
    producao_bibliografica = db.Column(db.Text, unique=False)
    participacao_em_eventos = db.Column(db.Text, unique=False)
    areas_de_atuacao = db.Column(db.Text, unique=False)
    bancas_de_trabalho = db.Column(db.Text, unique=False)
    producao_tecnica = db.Column(db.Text, unique=False)
    membro_do_corpo_editorial = db.Column(db.Text, unique=False)
    producao_artistica = db.Column(db.Text, unique=False)
    artigos = db.Column(db.Text, unique=False)
    informacao_complementar = db.Column(db.Text, unique=False)
    outras_informacoes_importantes = db.Column(db.Text, unique=False)

    # Method that returns the object notation for each user
    def __repr__(self):
        return '<User %r>' % self.username

    # Returns the number of users
    def get_number_of_users(self):
        return self.query.count()

    # Add a user to the database
    def add_user(self, username, email, password, name, photoURL, **kwargs):

        new_user = User(
            # Receives the required info
            name=name,
            username=username, 
            photoURL=photoURL,
            email=email, 
            password=hashlib.sha256(password.encode('utf-8')).hexdigest(),    
        )
        # kwargs contains all the optional info in different keyword-arguments
        for key, value in kwargs.items():
                if value != None:
                    setattr(new_user, key, value)
                else:
                    setattr(new_user, key, DEFAULTSTRING)

        # Add the user to the database and save the changes
        db.session.add(new_user)
        db.session.commit()

    # Convert a list into a storable string
    def _list_to_string(self, list):
        string = ""
        for item in list:
            string += item + "$"
        return string

    # Get a user with the given username
    def get_user(self, username):
        return self.query.filter_by(username=username).first()
# Creates all the tables in the database
with app.app_context():
    db.create_all()
