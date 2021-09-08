from flask import jsonify
from flask_restful import Resource

# Import the base database model
from basic.create_sql import User


# Instance the database table
user = User()

# Return all users in the terminal
class __ReturnAll(Resource):
    def get(self):
        listaDeUsers = []
        # Add all users to the list
        for usuario in user.query.all():
            listaDeUsers.append(usuario.username)
        return jsonify(
            message="Usuários Encontrados",
            users=listaDeUsers
        )
