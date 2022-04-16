import React from 'react';
import './Training.css'
import useTrainings from './../../hooks/useTrainings';
import Training from '../Training/Training';

const Trainings = () => {
    const [trainings,setTrainings] = useTrainings();
    console.log(trainings);
    return (
        <div className='container bg-black text-white'>
            <h1>Training Sessions</h1>
            <div className='row'>
            {
                trainings.map(training => <Training key={training.id} training={training}></Training>)
            }
            </div>
        </div>
    );
};

export default Trainings;