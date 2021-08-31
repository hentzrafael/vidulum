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
        password = hashlib.sha256(request.json['password'].encode('utf-8')).hexdigest()
        return self.check_login(username, password)
        

    def check_login(self, username, password):
        try:
            userData = user.query.filter_by(username=username).first()
            if userData.password == password:
                return jsonify(
                    message="Password is correct"
                )
            elif userData.password != password:
                return jsonify(
                    message="Password is incorrect"
                )
            
        except Exception as e:
            print(e)
            return jsonify(
                message="UM erro ocorreu"
            )