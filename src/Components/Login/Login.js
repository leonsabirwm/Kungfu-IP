import React, { useState } from 'react';
import { Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './Login.css'
import googleImg from '../../../src/images/google-logo.png'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle,googleUser,googleLoading,googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [userInfo,setUserInfo] = useState({
        email:'',
        password:''
    });
    const handleEmailInput = (event)=>{
        setUserInfo({...userInfo,email:event.target.value})
    }
    const handlePasswordInput = (event)=>{
        setUserInfo({...userInfo,password:event.target.value})
        console.log(userInfo.password);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(userInfo.email,userInfo.password);

    }
   if(error){
       console.log(error)
   }
    if(user){
        console.log(user);
    }
    const handleGoogleSignIn = () =>{
        console.log('hi there')
        signInWithGoogle();
    }
    return (
        <div className='login-form text-white d-flex flex-column align-items-center'>
           <Form onSubmit={handleFormSubmit}>
            <div className='d-flex flex-column align-items-start'>
                <h4 className='d-inline-block'>Please Login</h4>
                <br />
            <input onBlur={handleEmailInput} className='border-0 outline-0 w-25 mb-3' name='email' type="text" placeholder='Your Email' required />
            <br />
            <input onBlur={handlePasswordInput} className='border-0 outline-0 w-25 mb-3' name='password' type="password" placeholder='Your Password' required/>
            <br />
            <button type='submit' className='bg-danger border-0 px-3 py-2 text-white mb-3'>Login</button>
     
               <div className='d-flex align-items-center justify-content-center'>
               <p className=''>New to Kung Fu Ip ?</p>
               <p><Nav.Link className='text-danger fs-5' as={Link} to="/signup">Sign Up</Nav.Link></p>
               </div>
           <p>--------------  OR  --------------</p>

                </div>
            </Form>
               <div>
                   <button onClick={handleGoogleSignIn} className='bg-success border-0 px-3 py-2 text-white mb-3 me-4'>
                
                    <img width={30} src={googleImg} alt="" />   Continue With Google
                   </button>
               </div>
        </div>
    );
};

export default Login;