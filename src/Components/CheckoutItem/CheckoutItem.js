import './CheckoutItem.css'


const CheckoutItem = ({training}) => {
    
    
    return (
        <div className=' check-item d-flex flex-column align-items-center justify-contents-center mb-4'>
            <div>
            <h4>You are checking out for : </h4>
            </div>
            <div>
            <div className='col-lg-4 col-12 training-card d-flex flex-column p-0 mx-auto'>
            <div className=''>
                <img className='img-fluid' src={training.image} alt="" />
            </div>
            <div className='d-flex flex-column align-items-start px-2 pt-4'>
                <h4>{training.training}</h4>
                <h5 className='text-nowrap'>Fee : ${training.fee}</h5>
                <h5 className='text-nowrap'>Duration : {training.duration} Days</h5>
            </div>
                
            
            
        </div>
            </div>
           
        </div>
    );
};

export default CheckoutItem;