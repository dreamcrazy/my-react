import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Info from "../components/Info/Info";



const router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>
    },
    {
        path:'/info/:InfoId/test',
        element: <Info></Info>
    },
])

export default router