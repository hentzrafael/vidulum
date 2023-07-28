import routerData from "./routerData";
import {createBrowserRouter, Outlet} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
                <Outlet/>
        ),
        children: routerData
    },
]);

export default router;