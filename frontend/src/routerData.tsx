import {Outlet} from "react-router-dom";
import React from "react";

import {Box, Theme, Typography, useMediaQuery} from "@mui/material";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

interface IVPageProps {
    title?: string
    children: React.ReactNode
}

const VPage: React.FC<IVPageProps> = ({title, children}) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    return (
        <>
            {title &&
                <Box display={'flex'} flexDirection={'row'} mb={smDown ? 6 : 10}>
                    <Typography variant={smDown ? "h5" : "h4"}>{title}</Typography>
                </Box>
            }
            {children}
        </>
    )
}

interface IRouterProps {
    path: string;
    element: JSX.Element;
    children?: IRouterProps[]
}

const routerData: IRouterProps[] = [
    //Login
    {
        path: "",
        element: <VPage><LoginPage /></VPage>
    },
    //CADASTROS
    // {
    //     path: "cadastros",
    //     element: <Outlet/>, // o <Outlet/> representa o element filho.
    //     children: [
    //         {
    //             path: "",
    //             element: <VPage title={'Cadastros'}><Cadastros /></VPage>,
    //         },
    //         {
    //             path: "new",
    //             element: <VPage title={'Cadastrar'}><NewCadastros /></VPage>,
    //         },
    //         {
    //             path: ":id_origem",
    //             element: <VPage><EditCadastro /></VPage>,
    //         },
    //     ]
    // },
    //ERROR
    {
        path: "*",
        element: <NotFound />
    }
];

export default routerData;
