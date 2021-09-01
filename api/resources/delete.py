from basic.create_sql import User, db
from flask_restful import Resource, request
import hashlib


user = User()


class __Delete(Resource):
    def delete(self, username):
        try:
            # username = request.json['username']
            if username == 'admin':
                return {'message': 'Cannot delete admin'}, 400
            database_passwd = user.query.filter_by(username=username).first()
            database_passwd = database_passwd.password
            password = request.json['password']
            password = hashlib.sha256(password.encode('utf-8')).hexdigest()
            if password == database_passwd:
                user.query.filter_by(username=username).delete()
                db.session.commit()
                return {'status': 'success'}, 200
            else:
                return {'status': 'failed'}, 400
        except Exception as e:
            print(e)
            return {'status': 'failed'}, 400
