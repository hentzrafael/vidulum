from flask_restful import Resource
from flask import jsonify
from basic.create_sql import User

user = User()


class __SearchUser(Resource):
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
