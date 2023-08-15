import {createBrowserRouter} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CreateCVPage from './pages/CreateCVPage'
import CreateAccountPage from './pages/CreateAccountPage';
import ViewCVPage from './pages/ViewCVPage';

export const router = createBrowserRouter([
    {
        path:"/",
        element: <LoginPage/>,
    },
    {
        path:"/signup",
        element:<CreateAccountPage/>
    },
    {
        path:"/create",
        element:<CreateCVPage/>
    },
    {
        path:"/view/:id",
        element:<ViewCVPage/>
    },
    {
        path:"/cv/:id",
        element:<ViewCVPage/>
    },
    {
        path:"*",
        element: <div>Página não encontrada</div>
    }
]);