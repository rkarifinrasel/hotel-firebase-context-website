import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import european from '../../assets/European hotel.jpg';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
    const {user,logOut}=useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then(result=>{
            console.log(result)
            alert('Successfully Log Out')
        })
        .catch(error=>{
            console.log(error.message)
            alert('Donot Log Out')
        })
    }
    return (
        <div className='relative text-black '>
<img className='h-72 w-full' src={european} alt="" srcset="" />
           <div className='absolute inset-0 flex flex-col'>
           <nav className='justify-center items-center ml-40 mt-8 '>
                <Link to='/' className='pl-10 hover:text-sky-600 hover:font-bold'>Home</Link>
                <Link to='/about' className='pl-10 hover:text-sky-600 hover:font-bold'>About</Link>
                <Link to='/book' className='pl-10 hover:text-sky-600 hover:font-bold'>Book</Link>
               
                {
                    user ?
                     <Link onClick={handleLogOut} className='pl-10 hover:text-sky-600 hover:font-bold'>Sign Out</Link>:
                    <>
                    <Link to='/login' className='pl-10 hover:text-sky-600 hover:font-bold'>Login</Link>
                    <Link to='/register' className='pl-10 hover:text-sky-600 hover:font-bold'>Register</Link>
                    </>
                   

                }

               
            </nav>
            <div className='mt-auto pb-2 '>
                <h1 className='text-5xl text-center font-bold pb-6 '>European Resort</h1>
                <p className='text-3xl font-bold text-center'>A global icons of European luxury</p>

            </div>
           </div>
        </div>
    );
};

export default Header;