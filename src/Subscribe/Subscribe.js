import React from 'react';
import './Subscribe.css'
import envelop from '../../src/images/envelop.png'

const Subscribe = () => {
    return (
        <div className='container row mx-auto my-5 my-5'>
            <div className='col-lg-6 col-12'>
                <img className='img-fluid' src={envelop} alt="" />
            </div>
            <div className='col-lg-6 col-12 d-flex flex-column align-items-left justify-content-center text-white'>
                <div className="d-flex flex-row">
                <h2 className='text-nowrap subs-title'>Sign Up.Explore Kung Fu.Prove Yourself.</h2>
               
                </div>
               <div>
               <p className='subscribe-newsletter'>Subscribe us to get newsletter related to Kung Fu.Where we will let you know historic events and evulation of Kung Fu.Subscribing our newsletter will offer you 10% discount on any of our training package.</p>
               </div>
               <div className='subs-input-container'>
                   <input className='subs-input' type="text" placeholder='Your Email Please' />
                   <button className='border-0 bg-danger px-2 py-2 text-white'>Subscribe</button>
               </div>
            </div>
            
        </div>
    );
};

export default Subscribe;