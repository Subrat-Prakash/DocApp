import SignUP from "@/components/SignUp/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'DocApp/SignUp',
    description: 'Welcome to DocApp',
  }
const SignUpPage = () => {
    return (
        <>
          <SignUP/>
        </>
    )
}

export default SignUpPage;