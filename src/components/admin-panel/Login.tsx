import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";


function Login() {
  return (
    <div className="bg-black min-h-screen grid place-items-center">
        <button className="bg-white px-8 py-4 flex gap-2 itemc-center" onClick={()=> signIn("google")}>
            <FcGoogle size={30} />
            Sign In With Google
        </button>
    </div>
  )
}

export default Login