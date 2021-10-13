import axios from 'axios';
import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            "name": '',
            "username": '',
            "password": '',
            "email": '',
            "photoURL": '',
            "biografia": '',
            "endereco": '',
            "idiomas": '',
            "formacao_academica": '',
            "projetos": '',
            "atuacao_profissional": '',
            "producao_bibliografica": '',
            "participacao_em_eventos": '',
            "areas_de_atuacao": '',
            "bancas_de_trabalho": '',
            "producao_tecnica": '',
            "membro_do_corpo_editorial": '',
            "producao_artistica": '',
            "artigos": '',
            "informacao_complementar": '',
            "outras_informacoes_importantes": '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(this.state)

}
    handleSubmit(e){
        e.preventDefault();
        const data = this.state
        axios.post(this.props.url, data)
    }

    render(){
        return (
            <div className="form-">
            <form>
                    <label for="name">
                        Nome:
                        <input type="text" name="name" id="name" required  onChange={this.handleInputChange}/>
                    </label>

                    <label for="username">
                        Nome de Usuário:
                        <input type="text" name="username" id="username" required onChange={this.handleInputChange}/>
                    </label>

                    <label for="password">
                        Senha:
                        <input type="password" name="password" id="password" required onChange={this.handleInputChange}/>
                    </label>

                    <label for="email">
                        Email:
                        <input type="email" name="email" id="email" required onChange={this.handleInputChange}/>
                    </label>
                    <label for="photo">
                        URL da imagem:
                        <input type="text" name="photo" id="photo" required onChange={this.handleInputChange}/>
                    </label>
                    <label for="biografia">
                        Biografia:
                        <input type="text" name="biografia" id="biografia" required onChange={this.handleInputChange}/>
                    </label>
                    <label for="endereco">
                        Endereço:
                        <input type="text" name="endereco" id="endereco" onChange={this.handleInputChange}/>
                    </label>

                    <label for="idiomas">
                        Idiomas:
                        <input type="text" name="idiomas" id="idiomas" onChange={this.handleInputChange}/>
                    </label>
                    <label for="formacao_academica">
                        Formação Acadêmica:
                        <input type="text" name="formacao_academica" id="formacao_academica" onChange={this.handleInputChange}/>
                    </label>
                    <label for="projetos">
                        Projetos:
                        <input type="text" name="projetos" id="projetos" onChange={this.handleInputChange}/>
                    </label>
                    <label for="atuacao_profissional">
                        Atuação Profissional:
                        <input type="text" name="atuacao_profissional" id="atuacao_profissional" onChange={this.handleInputChange}/>
                    </label>
                    <label for="producao_bibliografica">
                        Produção Bibliográfica:
                        <input type="text" name="producao_bibliografica" id="producao_bibliografica" onChange={this.handleInputChange}/>
                    </label>
                    <label for="participacao_em_eventos">
                        Participação em Eventos:
                        <input type="text" name="participacao_em_eventos" id="participacao_em_eventos" onChange={this.handleInputChange}/>
                    </label>
                    <label for="areas_de_atuacao">
                        Áreas de Atuação:
                        <input type="text" name="areas_de_atuacao" id="areas_de_atuacao" onChange={this.handleInputChange}/>
                    </label>
                    <label for="bancas_de_trabalho">
                        Bancas de Trabalho:
                        <input type="text" name="bancas_de_trabalho" id="bancas_de_trabalho" onChange={this.handleInputChange}/>
                    </label>
                    <label for="producao_tecnica">
                        Produção Técnica:
                        <input type="text" name="producao_tecnica" id="producao_tecnica" onChange={this.handleInputChange}/>
                    </label>
                    <label for="membro_do_corpo-editorial">
                        Membro do Corpo Editorial:
                        <input type="text" name="membro_do_corpo-editorial" id="membro_do_corpo-editorial" onChange={this.handleInputChange}/>
                    </label>
                    <label for="producao_artistica">
                        Produção Artística:
                        <input type="text" name="producao_artistica" id="producao_artistica" onChange={this.handleInputChange}/>
                    </label>
                    <label for="artigos">
                        Artigos:
                        <input type="text" name="artigos" id="artigos" onChange={this.handleInputChange}/>
                    </label>
                    <label for="informacao_complementar">
                        Informação Complementar:
                        <input type="text" name="informacao_complementar" id="informacao_complementar" onChange={this.handleInputChange}/>
                    </label>
                    <label for="outras_informacoes_importantes">
                        Outras Informações Importantes:
                        <input type="text" name="outras_informacoes_importantes" id="outras_informacoes_importantes" onChange={this.handleInputChange}/>
                    </label>
                    <button  type="submit"onClick={this.handleSubmit}>Cadastrar</button>
                    

                </form>
        </div>
        )
    }


}

export default Form;