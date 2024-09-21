import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BaseLayout from "./layouts/BaseLayout";



const router = createBrowserRouter([
    {
        path:"/",
        element:<BaseLayout />,
        children:[
            {
                path:"/",
                element:<Home />,
            }
        ]
        
    }
])


export default router