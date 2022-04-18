import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './Booked.css'

const Booked = () => {
    const {trainingId} = useParams();
    const [user] = useAuthState(auth);


    return (
        <div className='booked-section'>
            <div className='w-50 mx-auto'>
            <h4>Thank you for the booking...</h4>
            <p className='booking-text my-4'>Our team will contract you withing six hours of booking and provide you needed information about your personal training session.Till then stay mentally prepared and exited to train with Shifu IP.Wishing you luck and be a good martial artist rather than a good fighter.</p>
            </div>
            <div className='booking-card'>
                <h3>Your Booking</h3>
                <p>Training Id : {trainingId}</p>
                <p>Trainee's Email : {user?.email}</p>
                <p>Trainee's Name : {user?.displayName}</p>
            </div>
        </div>
    );
};

export default Booked;