import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutContext } from '../../App';
import './Training.css'

const Training = ({training}) => {
    const [checkItem,setCheckItem] = useContext(CheckoutContext);
    const navigate = useNavigate();
    const itemArr = [];
    const handleCheckOut = ()=>{
        itemArr.push(training);
        setCheckItem(itemArr);
        navigate(`/checkout/${training.id}`);
    }
    return (
        <div className='col-lg-4 col-12 training-card d-flex flex-column p-0'>
            <div className=''>
                <img className='img-fluid' src={training.image} alt="" />
            </div>
            <div className='d-flex flex-column align-items-start px-2 pt-4 mb-5'>
                <h4>{training.training}</h4>
                <h5 className='text-nowrap'>Fee : ${training.fee}</h5>
                <h5 className='text-nowrap'>Duration : {training.duration} Days</h5>
                <p className='text-start mt-3'>{training.description}</p>
            </div>
                <button onClick={handleCheckOut} className='border-0 outline-none w-100 p-2 bg-danger checkout-btn'>Check Out</button>
            
            
        </div>
    );
};

export default Training;