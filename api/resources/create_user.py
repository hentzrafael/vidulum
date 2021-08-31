from flask_restful import Resource, request
from basic.create_sql import User
from flask import jsonify
import sqlite3


user = User()
DEFAULTSTRING = "Não há informações cadastradas neste tópico"

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
                
                formacao_academica= None if 'formacao_academica' not in request.json else request.json['formacao_academica'],
                biografia=None if 'biografia' not in request.json else request.json['biografia'],
                projetos=None if 'projetos' not in request.json else request.json['projetos'],
                areas_de_atuacao=None if 'areas_de_atuacao' not in request.json else request.json['areas_de_atuacao'],
                atuacao_profissional=None if 'atuacao_profissional' not in request.json else request.json['atuacao_profissional'],
                producao_bibliografica=None if 'producao_bibliografica' not in request.json else request.json['producao_bibliografica'],
                participacao_em_eventos=None if 'participacao_em_eventos' not in request.json else request.json['participacao_em_eventos'],
                bancas_de_trabalho=None if 'bancas_de_trabalho' not in request.json else request.json['bancas_de_trabalho'],
                producao_tecnica=None if 'producao_tecnica' not in request.json else request.json['producao_tecnica'],
                membro_do_corpo_editorial=None if 'membro_do_corpo_editorial' not in request.json else request.json['membro_do_corpo_editorial'],
                producao_artistica=None if 'producao_artistica' not in request.json else request.json['producao_artistica'],
                artigos=None if 'artigos' not in request.json else request.json['artigos'],
                informacao_complementar=None if 'informacao_complementar' not in request.json else request.json['informacao_complementar'],
                outras_informacoes_importantes=None if 'outras_informacoes_importantes' not in request.json else request.json['outras_informacoes_importantes']
            )
            return jsonify(
                message="User created"
            )
        
        except Exception as e:
            print(e)
            return jsonify(
                message="Deu erro"
            )
        
