import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='text-white about-section d-flex align-items-center row container mx-auto'>
           <div className='d-flex  flex-column justify-content-center align-items-start col-lg-6 col-12 mb-lg-0 mb-5'>
               <p className='text-nowrap'>This page is about goal of</p>
               <h1 className='fs-1 text-nowrap'>Leon Sabir</h1>
               </div>
           <div className='col-lg-6 col-12'>
               <p className='about-paragraph'>To me goals are like variables.As we grow and learn our goals keep changing.I also had some goals which now may seems worthless but at some point those were meaningful.Anyway as of now I am fousing on Web Development and I want to identify myself as a full-stack web developer.I know I have some insecurities about myself and all but I am trying to get rid of that but I need to try more harder.Wishing myself adventurous coding journey.</p>
           </div>
        </div>
    );
};

export default About;