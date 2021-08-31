from flask.json import jsonify
from basic.create_sql import db
from basic.create_sql import User
from flask_restful import Resource, request
from flask import jsonify
import hashlib

user = User()

class __Login(Resource):
    def post(self):
        username = request.json['username']
        print(username)
        password = hashlib.sha256(request.json['password'].encode('utf-8')).hexdigest()
        if self.check_login():
            return jsonify(
                message="Login successful"
            )
        

    def check_login(self):
        try:
            userData = user.query.filter_by(username=self.username).first()
            if userData.password != self.password:
                return jsonify(
                    message="Password is incorrect"
                )
            else:
                return True
        except Exception as e:
            print(e)
            return jsonify(
                message="UM erro ocorreu"
            )