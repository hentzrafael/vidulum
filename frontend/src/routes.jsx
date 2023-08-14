import {createBrowserRouter} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

export const router = createBrowserRouter([
    {
        path:"/",
        element: <LoginPage/>,
        // children:[
        //     {
        //         path:"/teste",
        //         element:<CreatePage/>
        //     }
        // ] //Formato para adicionar páginas dentro uma da outra
    },
    {
        path:"/signup",
        element:<CreateAccountPage/>
    },
    {
        path:"*",
        element: <div>Página não encontrada</div>
    }
]);