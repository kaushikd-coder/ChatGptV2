"use client"

import  { signIn }  from  "next-auth/react" ;
import Image from 'next/image';

const Login = () => {
    return (
        <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
            <Image 
                src="https://chromeunboxed.com/wp-content/uploads/2022/12/ChatGPT-Feature-1200x900.png"
                height={300}
                width={300}
                alt="logo"
                />
                <button onClick={() => signIn("google")} className="text-white font-bold text-3xl animate-pulse">Sign In to use ChatGpt</button>
        </div>
    )
}

export default Login
