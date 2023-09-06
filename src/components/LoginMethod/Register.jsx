import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
  const [user,setUser]=useState()
  const [error,setError]=useState()
    const {createEmail,emailVarification}=useContext(AuthContext)
    const [show,setShow]=useState(false)
    const handleCreateEmail=(event)=>{
        event.preventDefault()
setError()
setUser()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password)

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
          setError(' Ensure string has two uppercase letters.')
          return
        }
        else if(!/(?=.*[!@#$&*])/.test(password)){
          setError(' Ensure string has one special case letter.')
          return
        }
        else if(password.length<8){
          setError('minimum 8 character')
        }

        createEmail(email,password)
       
        .then(result=>{
            const createUser=result.user;
            console.log(createUser)
            // emailVarification(createUser)
            form.reset()
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
        })

     
          // emailVarification()
          // .then(result=>{
          //   console.log(result)
          //   alert('please check your email varification')
          // })
          // .then(error=>{
          //   console.log(error.message)
          //   alert('dont email varification')
          // })
     
        


    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleCreateEmail} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show ? 'text':'password'} placeholder="password" name='password' className="input input-bordered" required />
                
              </div>
              <p onClick={()=>setShow(!show)} className='mt-2 ml-2 mb-2'>
  
  {
  show ?<span>Hide Password</span>:<span>Show Password</span>
}


</p>
<p>Already have an Account? please  <Link to='/login' className='text-green-500'>Login</Link></p>
           
              <input className='btn btn-primary mt-6' type="submit" value="Register" />
            </form>
            
<p className='text-red-600 ml-6 mb-4'>{error}</p>
    
          </div>
        </div>
      </div>
    );
};

export default Register;