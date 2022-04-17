import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Training.css'

const Training = ({training}) => {
    const navigate = useNavigate();
    return (
        <div className='col-4 training-card d-flex flex-column p-0'>
            <div className=''>
                <img className='img-fluid' src={training.image} alt="" />
            </div>
            <div className='d-flex flex-column align-items-start px-2 pt-4 mb-5'>
                <h4>{training.training}</h4>
                <h5>Fee : ${training.fee}</h5>
                <h5>Duration : {training.duration} Days</h5>
                <p className='text-start mt-3'>{training.description}</p>
            </div>
                <button onClick={()=>navigate('/checkout')} className='border-0 outline-none w-100 p-2 checkout-btn'>Check Out</button>
            
            
        </div>
    );
};

export default Training;