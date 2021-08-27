from flask import jsonify
from flask_restful import Resource

# Import the base database model
from basic.create_sql import User


# Instance the database table
user = User()

# Return all users in the terminal
class __ReturnAll(Resource):
    def get(self):
        print(user.query.all())
        return jsonify(
            message="Users found",
        )
