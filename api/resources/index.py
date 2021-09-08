# Import basic information and the flask restful library
from flask.json import jsonify
from basic.create_sql import User
from flask_restful import Resource

#Instance the user table
user = User()

class __IndexInformation(Resource):
    # Return the number of users in the database
    def get(self):
        return jsonify(
            number_of_users=user.get_number_of_users(),
        )
