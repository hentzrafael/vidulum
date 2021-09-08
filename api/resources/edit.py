# import the basic resources
from basic.create_sql import User, db

# import the flask module and built-in module to generate a hash
from flask_restful import Resource, request
import hashlib

# Instance the user table
user = User()

#Defines what fields cannot be edited
NON_EDITABLE_FIELDS = ['id', 'password', 'username']

class __Edit(Resource):
    def post(self, username):
        try:
            # Try to get the user by username
            userData = user.query.filter_by(username=username).first()
            print(userData)
            # Get the passsword and encodes it with hashlib
            userPasswd = userData.password
            requestPasswd  = request.json['password']
            requestPasswd = hashlib.sha256(requestPasswd.encode('utf-8')).hexdigest()

            #Compares passwords
            if userPasswd == requestPasswd:
                # If the passwords match, get the data from the request
                for key, value in request.json.items():
                    if key not in NON_EDITABLE_FIELDS:
                        setattr(userData, key, value)
                        db.session.commit()
                return {'message': 'Dados inseridos com sucesso no banco de dados!'}
            return {'message': 'Senha incorreta!'}
        except Exception as e:
            print(e)
            return {'message': 'Uma exceção não tratada foi encontrada, verifique o terminal de execução!'}
            