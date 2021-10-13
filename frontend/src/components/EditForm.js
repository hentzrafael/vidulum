import axios from 'axios';
import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            "password": '',
            "biografia": '',
            "endereco": '',
            "photoURL":'',
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
        let chaves = Object.keys(this.state)
        let data = {} 
        console.log(chaves)
        chaves.forEach((element)=>{
            console.log(this.state[element])
            if(this.state[element] !== ""){
                data[element] = this.state[element]
            }
        })
        axios.post(this.props.url, data)
    }

    async getAPIData(username){
        const response = await axios.get("http://localhost:5000/view/"+username)
        this.dadosApi = response.data
    }

    render(){
        return (
            <div className="form-">
            <form>
                    <label for="password">
                        Senha:
                        <input type="password" name="password" id="password" required onChange={this.handleInputChange}/>
                    </label>

                    <label for="biografia">
                        Biografia:
                        <textarea type="text" name="biografia" id="biografia" required onChange={this.handleInputChange}/>
                    </label>
                    <label for="photoURL">
                        URL da foto:
                        <input type="text" name="photoURL" id="photoURL" required onChange={this.handleInputChange}/>
                    </label>
                    <label for="endereco">
                        Endereço:
                        <textarea type="text" name="endereco" id="endereco" onChange={this.handleInputChange}/>
                    </label>

                    <label for="idiomas">
                        Idiomas:
                        <textarea type="text" name="idiomas" id="idiomas" onChange={this.handleInputChange}/>
                    </label>
                    <label for="formacao_academica">
                        Formação Acadêmica:
                        <textarea type="text" name="formacao_academica" id="formacao_academica" onChange={this.handleInputChange}/>
                    </label>
                    <label for="projetos">
                        Projetos:
                        <textarea type="text" name="projetos" id="projetos" onChange={this.handleInputChange}/>
                    </label>
                    <label for="atuacao_profissional">
                        Atuação Profissional:
                        <textarea type="text" name="atuacao_profissional" id="atuacao_profissional" onChange={this.handleInputChange}/>
                    </label>
                    <label for="producao_bibliografica">
                        Produção Bibliográfica:
                        <textarea type="text" name="producao_bibliografica" id="producao_bibliografica" onChange={this.handleInputChange}/>
                    </label>
                    <label for="participacao_em_eventos">
                        Participação em Eventos:
                        <textarea type="text" name="participacao_em_eventos" id="participacao_em_eventos" onChange={this.handleInputChange}/>
                    </label>
                    <label for="areas_de_atuacao">
                        Áreas de Atuação:
                        <textarea type="text" name="areas_de_atuacao" id="areas_de_atuacao" onChange={this.handleInputChange}/>
                    </label>
                    <label for="bancas_de_trabalho">
                        Bancas de Trabalho:
                        <textarea type="text" name="bancas_de_trabalho" id="bancas_de_trabalho" onChange={this.handleInputChange}/>
                    </label>
                    <label for="producao_tecnica">
                        Produção Técnica:
                        <textarea type="text" name="producao_tecnica" id="producao_tecnica" onChange={this.handleInputChange}/>
                    </label>
                    <label for="membro_do_corpo_editorial">
                        Membro do Corpo Editorial:
                        <textarea type="text" name="membro_do_corpo_editorial" id="membro_do_corpo_editorial" onChange={this.handleInputChange}/>
                    </label>
                    <label for="producao_artistica">
                        Produção Artística:
                        <textarea type="text" name="producao_artistica" id="producao_artistica" onChange={this.handleInputChange}/>
                    </label>
                    <label for="artigos">
                        Artigos:
                        <textarea type="text" name="artigos" id="artigos" onChange={this.handleInputChange}/>
                    </label>
                    <label for="informacao_complementar">
                        Informação Complementar:
                        <textarea type="text" name="informacao_complementar" id="informacao_complementar" onChange={this.handleInputChange}/>
                    </label>
                    <label for="outras_informacoes_importantes">
                        Outras Informações Importantes:
                        <textarea type="text" name="outras_informacoes_importantes" id="outras_informacoes_importantes" onChange={this.handleInputChange}/>
                    </label>
                    <button  type="submit"onClick={this.handleSubmit}>Cadastrar</button>

                </form>
        </div>
        )
    }


}

export default Form;