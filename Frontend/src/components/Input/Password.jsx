/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

    const Password = ({value , onChange, placeholder}) => {
            const[showPassword, setShowPassword] = useState(false);
            
            const toggleShowPassword = () => {
                setShowPassword(!showPassword);
            };
    return (
        <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
        <input
            value={value}
            onChange={onChange}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder || "Password"}
            className="w-full text-sm py-3 rounded bg-transparent mr-3 outline-none"
        />{showPassword? (<FaRegEye
            size={22}
            className='text-primary cursor-pointer'
            onClick={()=> toggleShowPassword()}
        />): (<FaRegEyeSlash
            size={22}
            className='text-slate-500 cursor-pointer'
            onClick={()=> toggleShowPassword()}
        />)}
    </div>
    )
    }

    export default Password