import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
 
    const {signInEmail}=useContext(AuthContext)
const [show,setShow]=useState(false)
const [user,setUser]=useState()
const [error,setError]=useState()
const navigate=useNavigate()
const location=useLocation()
const from=location.state?.from?.pathname||'/';


    const handleSignInEmail=(event)=>{
        event.preventDefault()
setError()
setUser()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        console.log(email,password,confirm)

        if(password!==confirm){
          setError('donot match password')
          return
        }
        signInEmail(email,password)
        .then(result=>{
            const loginUser=result.user;
            console.log(loginUser)
            form.reset()
navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignInEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show?'text':'password'} name='password' placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm</span>
                </label>
                <input type={show ? 'text':'password'} name='confirm' placeholder="confirm password" className="input input-bordered" required />
                <p onClick={()=>setShow(!show)} className='mt-2 ml-2 mb-2'>
  
  {
  show ?<span>Hide Password</span>:<span>Show Password</span>
}


</p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <p>New to this Website? please <Link to='/register' className='text-green-500'>Register</Link></p>
              <input className='btn btn-primary' type="submit" value="Login" />
              </form>
              <p className='text-red-600 ml-6 mb-4'>{error}</p>


            </div>
          </div>
        </div>
    
    );
};

export default Login;