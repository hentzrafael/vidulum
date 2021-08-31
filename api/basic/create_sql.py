from flask_sqlalchemy import SQLAlchemy
from basic.create_app import app
import hashlib

#Configs the path to the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../database/database.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

DEFAULTSTRING = "Não há informações cadastradas neste tópico"


#Model that holds all the info for the users, a table in the database
class User(db.Model):
    #Creating all the columns on the User table
    id = db.Column(db.Integer, primary_key=True )
    username = db.Column(db.String(80), unique=True, nullable=False)
    name = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    endereco = db.Column(db.String(120), unique=False)
    
    photoURL = db.Column(db.String(120), unique=False, nullable=False)   
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


    def __repr__(self):
        return '<User %r>' % self.username

    def get_number_of_users(self):
        return self.query.count()

    def add_user(self, username, email, password, idiomas, name, photoURL,**kwargs):

        new_user = User(
            name=name,
            username=username, 
            photoURL=photoURL,
            idiomas=self._list_to_string(idiomas),
            email=email, 
            password=hashlib.sha256(password.encode('utf-8')).hexdigest(),

            endereco=kwargs.get("endereco", DEFAULTSTRING),
            biografia=kwargs.get("biografia", DEFAULTSTRING),
            formacao_academica=kwargs.get("formacao_academica", DEFAULTSTRING),
            projetos=kwargs.get("projetos", DEFAULTSTRING),
            atuacao_profissional=kwargs.get("atuacao_profissional", DEFAULTSTRING),
            producao_bibliografica=kwargs.get("producao_bibliografica", DEFAULTSTRING),
            participacao_em_eventos=kwargs.get("participacao_em_eventos", DEFAULTSTRING),
            areas_de_atuacao=kwargs.get("areas_de_atuacao", DEFAULTSTRING),
            bancas_de_trabalho=kwargs.get("bancas_de_trabalho", DEFAULTSTRING),
            producao_tecnica=kwargs.get("producao_tecnica", DEFAULTSTRING),
            membro_do_corpo_editorial=kwargs.get("membro_do_corpo_editorial", DEFAULTSTRING),
            producao_artistica=kwargs.get("producao_artistica", DEFAULTSTRING),
            artigos=kwargs.get("artigos", DEFAULTSTRING),
            informacao_complementar=kwargs.get("informacao_complementar", DEFAULTSTRING),
            outras_informacoes_importantes=kwargs.get("outras_informacoes_importantes", DEFAULTSTRING)         
        )
        for key, value in kwargs.items():
                if value != None:
                    setattr(new_user, key, value)
                else:
                    setattr(new_user, key, DEFAULTSTRING)

        
        db.session.add(new_user)
        db.session.commit()

    def _list_to_string(self, list):
        string = ""
        for item in list:
            string += item + " "
        return string
db.create_all()
