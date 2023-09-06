import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import google from '../../assets/google1.jpg';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const Footer = () => {
    const {googleSignin, user}=useContext(AuthContext)
    const navigate=useNavigate()
const location=useLocation()
const from=location.state?.from?.pathname||'/';

    const handleGoogleSignIn=()=>{
        googleSignin()
        .then(result=>{
          const gUser=result.user;
          console.log(gUser)
          alert('Successfully Login')
          navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error.message)
            alert('Donot Login')
        })
    }
    return (
        <div className='bg-gray-300 pt-10 pb-10 mt-4 mb-4'>
            {!user && <div onClick={handleGoogleSignIn} className='flex inline-flex border border-blue-700 justify-center items-center mx-auto '>
                <img className='h-10 w-10' src={google} alt="" srcset="" />
            <button className='bg-sky-500 border border-none h-10 p-2 font-bold '>Sign With Google</button>
            </div>}
           
            <h1 className='text-center'>This is not Copyrigth!</h1>
        </div>
    );
};

export default Footer;