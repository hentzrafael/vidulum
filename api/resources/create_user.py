# Import flask utilities
from flask_restful import Resource, request
from flask import jsonify

# Import the basics libraries
from basic.create_sql import User

# Instance the user table
user = User()

#Default information for the missing content
DEFAULTSTRING = "Não há informações cadastradas neste tópico"

class __CreateUser(Resource):
    def post(self):
        try:
            user.add_user(
                # Required data
                name=request.json['name'],
                username=request.json['username'],
                email=request.json['email'],
                password=request.json['password'],
                photoURL=request.json['photoURL'],
                
                # Optional data, that can be replaced with the DEFAULTSTRING
                idiomas=self.returnData('idiomas',request.json),
                endereco=self.returnData('endereco', request.json),
                formacao_academica= self.returnData('formacao_academica', request.json),
                biografia=self.returnData('biografia', request.json),
                projetos=self.returnData('projetos', request.json),
                areas_de_atuacao=self.returnData('areas_de_atuacao', request.json),
                atuacao_profissional=self.returnData('atuacao_profissional', request.json),
                producao_bibliografica=self.returnData('producao_bibliografica', request.json),
                participacao_em_eventos=self.returnData('participacao_em_eventos', request.json),
                bancas_de_trabalho=self.returnData('bancas_de_trabalho', request.json),
                producao_tecnica=self.returnData('producao_tecnica', request.json),
                membro_do_corpo_editorial=self.returnData('membro_do_corpo_editorial', request.json),
                producao_artistica=self.returnData('producao_artistica', request.json),
                artigos=self.returnData('artigos', request.json),
                informacao_complementar=self.returnData('informacao_complementar', request.json),
                outras_informacoes_importantes=self.returnData('outras_informacoes_importantes', request.json),
            )
            return jsonify(
                message="Usuário criado com sucesso!"
            )
        
        except Exception as e:
            print(e)
            return jsonify(
                message="Uma exceção não tratada foi captada, verificar terminal de execução!"
            )
            
    # Function to return None if a value isn't defined
    def returnData(self, key, json):
        if key not in json.keys():
            return None
        else:
            return json[key]
