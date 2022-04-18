import React from 'react';
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='text-white'>
           <div className='checkout-form'>
              <div>
              <h4 className=''>Client Info</h4>
               <input className='border-0 outline-0 w-25 mb-4' type="text" placeholder='Your Name' required/>
               <br />
               <input className='border-0 outline-0 w-25 mb-4' type="text" placeholder='You Phone' required />
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
               <button className='bg-danger border-0 px-3 py-2'>Proceed Checkout</button>
           </div>
        </div>
    );
};

export default Checkout;