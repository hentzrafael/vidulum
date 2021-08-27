from flask import jsonify
from flask_restful import Resource, request


# Import the base apps
from basic.create_sql import User
from basic.create_app import app, api


#Imports all the resources for the routes
from resources.index import __IndexInformation
from resources.search_user import __SearchUser
from resources.create_user import __CreateUser
from resources.return_all import __ReturnAll


#Instance the database
user = User()

#Add different routes to the api
api.add_resource(__IndexInformation, '/')
api.add_resource(__CreateUser, '/create')
api.add_resource(__SearchUser, '/view/<username>')
api.add_resource(__ReturnAll, '/all')

if __name__ == '__main__':
    app.run(debug=True)
