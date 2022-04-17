import React from 'react';
import './Training.css'
import useTrainings from './../../hooks/useTrainings';
import Training from '../Training/Training';

const Trainings = () => {
    const [trainings,setTrainings] = useTrainings();
    return (
        <div className='container bg-black text-white'>
            <h1>Personal Training Sessions</h1>
            <div className='row'>
            {
                trainings.map(training => <Training key={training.id} training={training}></Training>)
            }
            </div>
        </div>
    );
};

export default Trainings;