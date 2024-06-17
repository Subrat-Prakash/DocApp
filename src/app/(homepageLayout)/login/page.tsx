import LoginPage from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'DocApp/Login',
    description: 'Welcome to DocApp',
  }
const Login = () => {
    return (
        <>
            <LoginPage />
        </>
    )
}

export default Login;
