# Basic functions
from basic.create_sql import User, db

# Import flask utilities required
from flask_restful import Resource, request

#Library to generate the hash from the password
import hashlib

# Instances the user table
user = User()

# Encrypt the given password and return the hash
def encodePassword(password):
    hash_passwd = hashlib.sha256(password.encode('utf-8')).hexdigest()
    return hash_passwd


class __Delete(Resource):
    def delete(self, username):
        try:
            request_password = request.json['password']
            request_password = encodePassword(request_password)

            # Realize different actions if the admin is doing the request or not
            if username == 'admin':
                if request_password == user.get_user('admin').password:
                    requestUsername = request.json['username']
                    selectedUser = user.get_user(requestUsername)
                    user.query.filter_by(username=requestUsername).delete()

                    # Saves the alteration on the table
                    db.session.commit()
                    return {
                        'message': 'Usuário selecionado excluído com sucesso do banco de dados!'
                        }, 200

            # If isn't admin, check if the user provided the right
            database_passwd = user.get_user(username)
            database_passwd = database_passwd.password
            if request_password == database_passwd:
                user.query.filter_by(username=username).delete()

                # Saves the alteration on the table
                db.session.commit()

                return {
                    'message': 'Seu usuário foi excluído com sucesso!'
                    }, 200
            else:
                return {
                    'message': 'Exclusão falhou, senha incorreta!'
                    }, 403

        except Exception as e:
            print(e)
            return {
                'message': 'Uma exceção não tratada foi encontrada! Verifique o terminal de execução para mais detalhes'
                }, 500
