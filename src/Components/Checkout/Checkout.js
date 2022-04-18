import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { CheckoutContext } from '../../App';
import Booked from '../Booked/Booked';
import CheckoutItem from '../CheckoutItem/CheckoutItem';

import './Checkout.css'

const Checkout = () => {

    const [checkItem] = useContext(CheckoutContext);
    const [checkedout,setCheckedOut]=useState(false)
    
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        setCheckedOut(true);
    }
    return (
        <div className='text-white'>
            {checkedout ? <Booked></Booked> :
                <div>
                {
                    checkItem.map(training =><CheckoutItem key={training.id} training={training}></CheckoutItem>)
                }
                <Form onSubmit={handleFormSubmit}>
           <div className='checkout-form'>
              
              <div>
              <h4 className=''>Trainee Info</h4>
               <input className='border-0 outline-0 w-25 mb-4' type="text" placeholder='Your Name' required/>
               <br />
               <input className='border-0 outline-0 w-25 mb-4' type="number" placeholder='You Phone' required />
               <br />
               <input className='border-0 outline-0 w-25 mb-4' type="text" placeholder='You Email'  required/>
              </div>
           </div>
           <div className='billing-address'>
               <h4>Billing Address</h4>
               <input className='border-0 outline-0 w-25 mb-4' type="text" placeholder='City' required />
               <br />
               <input className='border-0 outline-0 w-25 mb-4' type="text" placeholder='State' required />
               <br />
               <input className='border-0 outline-0 w-25 mb-4' type="text" placeholder='Zip Code'  required/>
               <br />
               <textarea className='border-0 outline-0 w-25 mb-4' placeholder='Your Address' required></textarea>
           </div>
           <div>
               <button className='bg-danger border-0 px-3 py-2' type='submit'>Proceed Checkout</button>
           </div>
           </Form>
           </div>
           }

        </div>
    );
};

export default Checkout;