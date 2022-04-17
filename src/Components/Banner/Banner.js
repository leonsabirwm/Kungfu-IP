import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Banner.css";
const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-black text-white'>
            <div className='row d-flex flex-lg-row flex-column-reverse justify-content-center align-items-center m-5 p-4'>
                <div className='col-lg-6 col-12'>
                    <h1 className='text-start'>Learn Wing-Chun with Shifu IP.</h1>
                    <p className='text-start my-3 fs-6 banner-paragraph'>Wing Chun Kuen, commonly known as Wing Chun, or Ving Tsun, is a concept-based traditional Southern Chinese kung fu style and a form of self-defense, that requires quick arm movements and strong legs to defeat opponents. Softness and performance of techniques in a relaxed manner is fundamental to Wing Chun.</p>
                    <div className='text-start'>
                    <button onClick={()=> window.scrollTo({top:750,behavior:"smooth"})} className='training-btn text-white bg-danger  border-0 outline-0 px-4 py-3'>Trainings</button>
                </div>
                </div>
                <div className='col-lg-6 col-12'>
                    <img className='img-fluid mb-3' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2f3b6497-eff7-4ac2-9f7d-6bf6696121c5/d97o2ek-f3e8d024-58ec-4aae-ab15-78546ef30db5.jpg/v1/fill/w_1024,h_1195,q_75,strp/donnie_yen_vector_by_vennygara_d97o2ek-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE5NSIsInBhdGgiOiJcL2ZcLzJmM2I2NDk3LWVmZjctNGFjMi05ZjdkLTZiZjY2OTYxMjFjNVwvZDk3bzJlay1mM2U4ZDAyNC01OGVjLTRhYWUtYWIxNS03ODU0NmVmMzBkYjUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KjociaTVdY58hMdztQHK7AsJ6wiXkoe5GnUQa6VV_EI" alt="" />
                </div>
               
            </div>
        </div>
    );
};

export default Banner;