import React, { useEffect, useState } from 'react';
import { Form, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import googleImg from '../../../src/images/google-logo.png'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate();
    const [signInWithGoogle,googleuser,googleloading,googleerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [userInfo,setUserInfo] = useState({
        email:'',
        password:''
    });
    const [inputError,setInputError] = useState({
        emailError:'',
        passwordError:''
    })
    const handleEmailInput = (event)=>{
        console.log(event.target.value)
        const emailRegEx = /\S+@\S+\.\S+/;
        const valid = emailRegEx.test(event.target.value);
        
        if(valid){
            console.log('valid email')
            setUserInfo({...userInfo,email:event.target.value});
            setInputError({...inputError,emailError:''});
        }
        else{
            console.log('invalid email')
            setUserInfo({...userInfo,email:""});

            setInputError({...inputError,emailError:'Please enter a valid email.'});

        }
    }
    const handlePasswordInput = (event)=>{
        const passwordRegex = /(?=.{8,})/;
        const validPass = passwordRegex.test(event.target.value);
        if(validPass){
            setUserInfo({...userInfo,password:event.target.value});
            setInputError({...inputError,passwordError:''});
        }
        else{
            setInputError({...inputError,passwordError:'Password must contain at least eight character.'})
            setUserInfo({...userInfo,password:''})
            console.log(userInfo.password);
        }
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(userInfo.email,userInfo.password);

    }
    const handleGoogleSignIn = () =>{
        console.log('hi there')
        signInWithGoogle();
    }
    useEffect(()=>{
        if(user || googleuser){

            toast.success('User Created!');
            setTimeout(() => {
                
                navigate('/');
            }, 2000);
        }
    },[user,googleuser])
    return (
        <>
        <Toaster />
        <div className='signup-form text-white d-flex flex-column align-items-center'>
        <Form onSubmit={handleFormSubmit}>
            <div className='d-flex flex-column align-items-start'>
                <h4 className='d-inline-block'>Please Sign Up</h4>
                <br />
            <input onBlur={handleEmailInput} className='border-0 outline-0 w-25 mb-2' name='email' type="text" placeholder='Your Email' required />
            <br />
            <p className='text-danger mb-3'>{inputError.emailError}</p>
            <input onBlur={handlePasswordInput} className='border-0 outline-0 w-25 mb-3' name='password' type="password" placeholder='Your Password' required/>
            <p className='text-danger'>{inputError.passwordError}</p>
            <br />
            <button type='submit' className='bg-danger border-0 px-3 py-2 text-white mb-3'>Sign Up</button>
 
           <div className='d-flex align-items-center justify-content-center'>
           <p className=''>Already have an account ?</p>
           <p><Nav.Link className='text-danger fs-5' as={Link} to="/login">Login</Nav.Link></p>
           </div>
           <p>-------------- OR --------------</p>
            </div>
        </Form>
           <div>
                   <button onClick={handleGoogleSignIn} className='bg-success border-0 px-3 py-2 text-white mb-3 me-5 ms-1'>
                
                    <img width={30} src={googleImg} alt="" />   Continue With Google
                   </button>
               </div>
    </div>
    </>
    );
};

export default Signup;