from flask_restful import Resource, request
from basic.create_sql import User
from flask import jsonify
import sqlite3


user = User()


class __CreateUser(Resource):
    def post(self):
        try:
            user.add_user(
                name=request.json['name'],
                username=request.json['username'],
                email=request.json['email'],
                password=request.json['password'],
                photoURL=request.json['photoURL'],
                idiomas=request.json['idiomas'],
                
                formacao_academica=request.json['formacao_academica'],
                biografia=request.json['biografia'],
                projetos=request.json['projetos'],
                areas_de_atuacao=request.json['areas_de_atuacao'],
                atuacao_profissional=request.json['atuacao_profissional'],
                producao_bibliografica=request.json['producao_bibliografica'],
                participacao_em_eventos=request.json['participacao_em_eventos'],
                bancas_de_trabalho=request.json['bancas_de_trabalho'],
                producao_tecnica=request.json['producao_tecnica'],
                membro_do_corpo_editorial=request.json['membro_do_corpo_editorial'],
                producao_artistica=request.json['producao_artistica'],
                artigos=request.json['artigos'],
                informacao_complementar=request.json['informacao_complementar'],
                outras_informacoes_importantes=request.json['outras_informacoes_importantes'],

            )
            return jsonify(
                message="User created"
            )
        
        except Exception as e:
            print(e)
            return jsonify(
                message="Deu erro"
            )
        
