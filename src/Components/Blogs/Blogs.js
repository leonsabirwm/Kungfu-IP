import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='QNA-section'>
            <div className='portion-one'>
                <div className='section-title answer'>
                    <h1 className='text-danger'><span className='text-sky-500'>QNA</span> <span className='text-green-500'>Section</span></h1>
                    <div className='circle bg-sky-500'>
                    </div>
                </div>
                <div className='answer'>
                    <h2 className=''>Diffrences between Authentication and Authorization ?</h2>
                    <p className=' my-3'>Athentication is a process of recognizing user's identity.Based on the result of the process,a user gain access to his/her personal account of the respecting app.In this process,user requests to the app with some information to get the access and the server takes that information and match that with previously saved information in backend.If both matches,the user get the access to his account.Otherwise,server send http response - 401 Unauthorized.In brief,authentication is a process by which a valid user get access to his account.</p>
                    <p>In contrast,authorization is a process by which a user get access to specific restricted resources.Authorization process starts after authentication process.After being recognized as authenticated user by server,he tries to access restricted resources of that app and if he has the permisson then he gets the access as authorized user to specific restricted resources.If the request for authorization is denied by the server or app,user gets http response code - 403 Forbidden.Which means The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.</p>
                </div>
            </div>
            <div className='portion-two'>
            <div className='answer'>
                    <h2 className='text-2xl'>What are you using firebase and what other option you have to implement authenticaton?</h2>
                    <p className='text-base my-3'>
                    Google Firebase is a Google-backend application development platform or  Backend-as-a-Service (BaaS) from Google.Firebase offers many backend development tool for web and mobile apps such as provides hosted backend services such as a realtime database, cloud storage, authentication, crash reporting, machine learning, remote configuration, and hosting for static files.As a web developer I use firebase to implement authentication in my web appliction.Since it is maintained by google that's why we do not need to put extra effort to maintain security and deal with issues related to security.If I use firebase I do not need to create any authentication system of my own.Creating and maintaining and authentication system is expensive and very time and effort consuming.Here we've Firebase which play the role of making our development smooth with firebase SDK and reducing our workload and time.Since I am getting this much of benefites from Firebase that's why I prefer Firebase.
                    </p>
                    <p>We also have other alternatives to implement authentication,such as: </p>
                        <ul className='alternative-list'>
                            <li>AWS Amplify</li>
                            <li>Backendless</li>
                            <li>Kuzzle</li>
                            <li>Supabase,etc</li>
                        </ul>
                   
                    
             </div> 
                
                <div className='answer'>
                    <h2 className='text-2xl'>What other services firebase provides besides authentication?</h2>
                    <p className='text-base my-3'>Besides authentication firebase provides other backend servies for app and web development.Some of them are mentioned below: </p>
                    <ul className='service-list'>
                        <li>Realtime Database - The Firebase Realtime Database is a cloud-hosted NoSQL database that lets you store and sync data between your users in realtime.</li>
                        <li>Cloud Storage - Firebase Cloud Storage is built with mobile connectivity in mind. Automatically pause and resume transfers as your app loses and regains connectivity. </li>
                        <li>Hosting - Firebase provides us the facility of deploing web apps and mobile app landing pages without all the hassle</li>
                        <li>Remote Configuration - Firebase Remote Config is a cloud service that lets you change the behavior and appearance of your app without requiring users to download an app update.</li>
                        <li>Crash Reporting - Firebase Crashlytics is a lightweight, realtime crash reporter that helps you track, prioritize, and fix stability issues that erode your app quality.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;