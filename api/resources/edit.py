from basic.create_sql import User, db
from flask_restful import Resource, request
import hashlib


user = User()
NON_EDITABLE_FIELDS = ['id', 'password', 'username']

class __Edit(Resource):
    def post(self, username):
        try:
            userData = user.query.filter_by(username=username).first()
            print(userData)
            userPasswd = userData.password
            requestPasswd  = request.json['password']
            requestPasswd = hashlib.sha256(requestPasswd.encode('utf-8')).hexdigest()
            if userPasswd == requestPasswd:
                for key, value in request.json.items():
                    if key not in NON_EDITABLE_FIELDS:
                        setattr(userData, key, value)
                        db.session.commit()
                return {'message': 'success'}
            return {'message': 'incorrect password'}
        except Exception as e:
            print(e)
            return {'message': 'an exception occurred'}
            