import {useParams} from 'react-router';

export default function ViewCVPage(){
    const params = useParams();
    return (
        <>
            <h1>Página de visualização do currículo {params.id}</h1>
        </>
    );
}