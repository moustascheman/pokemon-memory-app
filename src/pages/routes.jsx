import App from "../App";
import MemoryGame from "./MemoryGame";


const routes = [
    {
        path: "/",
        element: <App/>
    },
    {
        path:"game/:difficulty",
        element: <MemoryGame/>
    }
]

export default routes;