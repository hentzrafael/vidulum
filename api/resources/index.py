from flask.json import jsonify
from basic.create_sql import User
from flask_restful import Resource

user = User()


class __IndexInformation(Resource):
    def get(self):
        return jsonify(
            number_of_users=user.get_number_of_users(),
        )
