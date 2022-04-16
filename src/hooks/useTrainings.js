import React, { useEffect, useState } from 'react';

const useTrainings = () => {
    const [trainings,setTrainings] = useState([]);
    useEffect(()=>{
        fetch('trainings.json')
        .then(res => res.json())
        .then(data => setTrainings(data));
    },[])
    return [trainings,setTrainings];
};

export default useTrainings;