import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const Erro = () => {
    return (
        <div>
            <h2>ERRO 404</h2>
            <p>Erro ao encontrar a página!</p>
            <Link to={'/'}>
                <Button variant={'outlined'}>Voltar ao início</Button>
            </Link>
        </div>
    )
}
export default Erro;