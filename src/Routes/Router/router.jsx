import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Main/Main";
import Home from "../../Shared/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);