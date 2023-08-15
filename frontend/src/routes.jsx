import {createBrowserRouter} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CreateCVPage from './pages/CreateCVPage'
import CreateAccountPage from './pages/CreateAccountPage';
import ViewCVPage from './pages/ViewCVPage';
import BasePage from './pages/BasePage';

export const router = createBrowserRouter([
    {
        path:"/",
        element: <BasePage/>,
        children:[
            {
                path:"/login",
                element:<LoginPage/>
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
                path:"/cv/:id",
                element:<ViewCVPage/>
            },
        ]
    },
    
    {
        path:"*",
        element: <div>Página não encontrada</div>
    }
]);