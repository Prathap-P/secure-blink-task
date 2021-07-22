import React from 'react';
import '../css/Greeting.css';
import Navbar from './Navbar.js';
import video1 from '../public/videos/video-1.mp4';
import video2 from '../public/videos/video-2.mp4';

const Greeting= () => {
    return(
        <div className= 'greeting'>
            <Navbar/>
            <video autoPlay loop muted className= 'video'>
                <source src= {video1} type= 'video/mp4' />
                <source src= {video2} type= 'video/mp4' />
            </video>

            <div className= 'greeting_text'>
                <h1 className= 'title'>ADVENTURE AWAITS</h1>
                <h3 style= {{margin: 5 + 'px'}}>What are you waiting for?</h3>
                <div>
                    <button className= 'trans_btn'>Get Started</button>
                    <button className= 'watch_btn'>WATCH TRAILER</button>
                </div>
            </div>
        </div>
        );
}
    
export default Greeting;