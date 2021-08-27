from json import encoder
from flask import jsonify
from flask_restful import Resource, request 
from create_sql import User
from create_app import app, api

#Creates a database that will holds all the users
user = User()

#Returns the info for the landing page
class __IndexInformation(Resource):
    def get(self):
        return jsonify(
            number_of_users=user.get_number_of_users(),
        )


#Class with the responsability to return the user with the username provided on the route
class __ReturnUser(Resource):
    def get(self, username):
        try:
            return jsonify(
                message="User found",
                idiomas=user.query.filter_by(username=username).first().idiomas,
                username=user.query.filter_by(username=username).first().username,
                email=user.query.filter_by(username=username).first().email,
                id=user.query.filter_by(username=username).first().id,
                password=user.query.filter_by(username=username).first().password,
                biografia=user.query.filter_by(username=username).first().biografia,
                imagem=user.query.filter_by(username=username).first().photoURL,
                nome=user.query.filter_by(username=username).first().name,
    )
        except  Exception as e:
            print(e)
            return jsonify(
                message="User does not exist"
            )


class __RegisterUser(Resource):
    def post(self):
        try:
            user.add_user(
                username=request.json['username'],
                email=request.json['email'],
                password=request.json['password'],
                biografia=request.json['biografia'],
                photoURL=request.json['photoURL'],
                idiomas=request.json['idiomas'],
                name=request.json['name'],
            )
            return jsonify(
                message="User created"
            )
        except Exception as e:
            print(e)
            return jsonify(
                message="Deu erro"
            )

class __ReturnAllUsers(Resource):
    def get(self):
        print(user.query.all())
        return jsonify(
            message="Users found",
        )


#Add different routes to the api
api.add_resource(__IndexInformation, '/')
api.add_resource(__RegisterUser, '/create')
api.add_resource(__ReturnUser, '/view/<username>')
api.add_resource(__ReturnAllUsers, '/all')

if __name__ == '__main__':
    app.run(debug=True)
