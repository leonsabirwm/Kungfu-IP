import React, { useEffect, useState } from 'react';
import { Form, Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './Login.css'
import googleImg from '../../../src/images/google-logo.png'
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [sendPasswordResetEmail, sending,reError] = useSendPasswordResetEmail(
        auth
      );
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
    const[resetError,setResetError] = useState('');
    useEffect(()=>{
        if(error){
            switch(error?.code){
                case 'auth/wrong-password':toast.error('Invalid Password!!',{id:1});
                break;
                case 'auth/invalid-email':toast.error('Please enter a valid email!!',{id:2});
                break;
                case 'auth/user-not-found':toast.error('User Not Found!!',{id:3});
                break;
                default:toast.error('something went wrong!!',{id:4})

            }
        }
    },[error])
    const handleEmailInput = (event)=>{
        setUserInfo({...userInfo,email:event.target.value})
    }
    const handlePasswordInput = (event)=>{
        setUserInfo({...userInfo,password:event.target.value})
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(userInfo.email,userInfo.password);

    }
    useEffect(()=>{
        if(reError){

            toast.error('Email not found.',{id:133})
        }
        if(!reError && sending){
         
         setTimeout(()=>{
            toast.success('Password reset mail sent.');
        },1500)   

        }
        
    },[reError])
    useEffect(()=>{
        if(sending){

            toast.loading('Loading....',{id:139})
          
        }
    },[sending])
    useEffect(()=>{
        if(user || googleUser){
            toast.success('Login Successful..')
            setTimeout(()=>{

                navigate(from);
            },2000)
        }
    },[user,googleUser])
    const handleGoogleSignIn = () =>{
        signInWithGoogle();
    }
    const handlePasswordReset =async()=>{
        const resetEmail = userInfo.email;
        if(resetEmail.length === 0){
            setResetError('Please fill the email field to continue.');
        }
        if(resetEmail.length > 0){
            setResetError('');
        }
       await sendPasswordResetEmail(userInfo.email);
       
    }
    return (
        <div className='login-form text-white d-flex flex-column align-items-center'>
            <Toaster  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#ddd',
    },
    // Default options for specific types
    error: {
      duration: 3000,
      theme: {
        primary: 'red',
        secondary: 'black',
      },
    },
    success: {
      duration: 2000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
    loading:{
        duration:1000,
    }
  }}></Toaster>
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
               <p><Nav.Link className='text-danger fs-6' as={Link} to="/signup">Sign Up</Nav.Link></p>
               </div>
              

                </div>
            </Form>
            <div className='d-flex align-items-center justify-content-center'>
               <p className=''>Forgot Password ?</p>
               <p><button className='text-danger fs-6 border-0 bg-black' onClick={handlePasswordReset}>Reset Password</button></p>
               </div>
               <p className='text-danger'>{resetError}</p>
           <p>--------------  OR  --------------</p>

               <div>
                   <button onClick={handleGoogleSignIn} className='bg-success border-0 px-3 py-2 text-white mb-3 me-4'>
                
                    <img width={30} src={googleImg} alt="" />   Continue With Google
                   </button>
               </div>
        </div>
    );
};

export default Login;