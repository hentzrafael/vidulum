import axios from 'axios';
import React from 'react';
import Header from '../../Header/Header';
import Navbar from '../../Navbar';
import Section from '../../Section/Section';
import './ViewPage.css';






export default function Portfolio() {
        const selectedUser = sessionStorage.getItem("username")
        const [data, setData] = React.useState({});

        async function getData() {
            const response = await axios.get('http://127.0.0.1:5000/view/'+selectedUser);
            console.log(response.data);
            setData(response.data);
        }

        React.useEffect(() => {
            getData();
        }, []);

         

        return (
            
            <div className="center-container">
                <Navbar />
                
                <Header title={data.name} biografia={data.biografia}  photoUrl={data.photoURL}/>
                <Section title="Endereço" description={data.endereco}/>
                <Section title="Formação Acadêmica" description={data.formacao_academica}/>
                 <Section title="Formação Complementar" description={data.informacao_complementar}/>
                 <Section title="Atuação Profissional" description={data.atuacao_profissional}/>
                 <Section title="Projetos" description={data.projetos}/>
                 <Section title="Membro do corpo editorial" description={data.membro_do_corpo_editorial}/>
                 <Section title="Áreas de Atuação" description={data.areas_de_atuacao}/>
                <Section title="Idiomas" description={data.idiomas}/>
                <Section title="Produção Bibliográfica" description={data.producao_bibliografica}/>
                <Section title="Produção Técnica" description={data.producao_tecnica}/>
                <Section title="Produção Artística" description={data.producao_artistica}/>
                <Section title="Bancas de Trabalho" description={data.bancas_de_trabalho}/>
                <Section title="Eventos" description={data.participacao_em_eventos}/>
                <Section title="Outras Informações" description={data.outras_informacoes_importantes}/>
            </div>
        );
}  