from basic.create_sql import User, db
from flask_restful import Resource, request
import hashlib


user = User()


class __Delete(Resource):
    def delete(self, username):
        try:
            password = request.json['password']
            password = hashlib.sha256(password.encode('utf-8')).hexdigest()
            # username = request.json['username']
            if username == 'admin':
                if password == user.query.filter_by(username='admin').first().password:
                    requestUsername = request.json['username']
                    selectedUser = user.query.filter_by(username=requestUsername).first()
                    user.query.filter_by(username=requestUsername).delete()
                    db.session.commit()
                    return {'message': 'Deleted selected user'}
            database_passwd = user.query.filter_by(username=username).first()
            database_passwd = database_passwd.password
            if password == database_passwd:
                user.query.filter_by(username=username).delete()
                db.session.commit()
                return {'status': 'success'}, 200
            else:
                return {'status': 'failed'}, 400
        except Exception as e:
            print(e)
            return {'status': 'failed'}, 400
