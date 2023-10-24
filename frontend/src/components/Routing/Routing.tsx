import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Home/Home";

export const urls = {
  Home: '/',
  SignUp: '/sign-up',
  LogIn: '/log-in'
}

export const SERVER_URL: string = 'http://localhost:8000'

const router = createBrowserRouter([
    {
        path: urls.Home,
        element: <Home/>
    }
])

export default router