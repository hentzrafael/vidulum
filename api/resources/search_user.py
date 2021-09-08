# Import the basic functions and flask utilities
from flask_restful import Resource
from flask import jsonify
from basic.create_sql import User

# Instances the user table
user = User()


class __SearchUser(Resource):
    def get(self, username):
        try:
            # Search for the user in the table
            userData = user.query.filter_by(username=username).first()
            return jsonify(
                message="User found",
                # Return the required data
                idiomas=user.query.filter_by(username=username).first().idiomas,
                username=user.query.filter_by(username=username).first().username,
                email=user.query.filter_by(username=username).first().email,
                id=user.query.filter_by(username=username).first().id,
                password=user.query.filter_by(username=username).first().password,
                biografia=user.query.filter_by(username=username).first().biografia,
                imagem=user.query.filter_by(username=username).first().photoURL,
                nome=user.query.filter_by(username=username).first().name,

                # Return the optional data
                endereco=userData.endereco,
                formacao_academica=userData.formacao_academica,
                projetos=userData.projetos,
                atuacao_profissional=userData.atuacao_profissional,
                producao_bibliografica=userData.producao_bibliografica,
                participacao_em_eventos=userData.participacao_em_eventos,
                areas_de_atuacao=userData.areas_de_atuacao,
                bancas_de_trabalho=userData.bancas_de_trabalho,
                producao_tecnica=userData.producao_tecnica,
                membro_do_corpo_editorial=userData.membro_do_corpo_editorial,
                producao_artistica=userData.producao_artistica,
                artigos=userData.artigos,
                informacao_complementar=userData.informacao_complementar,
                outras_informacoes_importantes=userData.outras_informacoes_importantes,
            )
        except  Exception as e:
            print(e)
            return jsonify(
                message="Uma exceção não tratada foi encontrada, verifique o terminal de execução!"
            )
