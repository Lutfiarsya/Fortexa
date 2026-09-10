import { useState } from "react"
import iconFortexa from '../assets/icon.png'
import { heightResponsive, widthResponsive } from "../helper/helper"
import { Eye, EyeOff } from "lucide-react"
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { FaApple, FaFacebook } from "react-icons/fa";

const LoginPage = () => {
    const [data, setData] = useState({username: null, password: null})
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()


    return(
        <div className="h-screen font-['Poppins'] w-screen flex flex-col items-center justify-center">
            {/* image */}
            <div className="shadow-[0px_0px_8px_-5px_black] rounded-2xl">
                <img src={iconFortexa} width={100} height={100}/>
            </div>
            {/* form */}
            <div className="flex flex-col w-[90vw] justify-center gap-6 h-[50vh] px-4">
                <div>
                    <h2 className="font-semibold text-2xl">Welcome</h2>
                    <p className="font-regular italic text-xs  text-gray-500">Sign in to your money manager</p>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-regular text-base">Gmail</p>
                    <input
                    style={{width: widthResponsive(317), height: heightResponsive(48)}} 
                    type="gmail" className="p-2 rounded-md text-base bg-[#F2F2F2] border-1 border-gray-300 placeholder:text-xs"  placeholder="example@gmail.com" required/>
                </div>

                <div className="flex flex-col relative gap-2">
                    <p className="font-regular text-base">Password</p>
                    <input
                    style={{width: widthResponsive(317), height: heightResponsive(48)}} 
                    type={visible ? `text` : `password`} className="p-2 rounded-md text-base bg-[#F2F2F2] border-1 border-gray-300 placeholder:text-xs"  placeholder="Enter password" required/>
                    <div onClick={() => setVisible(!visible)} className="absolute w-10 right-6 items-center flex justify-center bottom-0 h-[50%] flex">
                    { visible ? <Eye size={20}/> : <EyeOff size={20}/> }
                    </div>
                </div>
                <button style={{width: widthResponsive(332), height: heightResponsive(62)}} className="text-center text-white font-semibold bg-linear-to-bl from-[var(--primary-color)] to-[var(--extra-color)] rounded-xl">Login</button>
            </div>

            <div className="flex flex-col justify-start h-[18vh] items-center w-full gap-4">

                <div className="flex flex-row items-center justify-center gap-2">
                    <div className="bg-black w-20 h-[0.8px]"></div>
                    <h2 className="text-[10px]">Or sign in with</h2>
                    <div className="bg-black w-20 h-[0.8px]"></div>
                </div>

                <div className="flex flex-row items-center justify-center gap-6">
                    <FcGoogle size={24}/>
                    <FaFacebook size={24}/>
                    <FaApple size={24}/>
                </div>

                <h2 className="text-base">Don't have an account?<span onClick={() => navigate('/register')} className="ml-2 text-[var(--primary-color)]">Register</span></h2>
            </div>
        </div>
    )
}

export default LoginPage