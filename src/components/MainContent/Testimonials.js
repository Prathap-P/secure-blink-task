import React from 'react';
import '../../css/Testimonials.css';
import quotation from '../../assets/quotation.svg';
import christopher from '../../assets/christopher.png';

const Testimonials= (props)=>{   
    return(
        <div className= 'Testimonials'>
            <div className= 'testimonials-title' >Testimonials</div>
            <div className= 'testimonials-info' >Check out What Our Students Think About Us</div>
            <div className= 'comments-list'>
                <div className= 'comment'>
                    <div className= 'comment-content'>
                        It's a comprehensive online learning platform for everyone looking to learn and course pro. provinding this platform which is very beneficial for practicals. Students can revise everything at home like dissection and slides
                    </div>
                    <div className= 'profile-details'>
                        <div className= 'profile-pic' style= {{backgroundImage : `url(${christopher})` }}></div>
                        <div className= 'profile-name'>Anshul Jain</div>
                        <div className= 'quotation' style= {{backgroundImage : `url(${quotation})` }}></div>
                    </div>
                </div>
                <div className= 'comment'>
                    <div className= 'comment-content'>
                        It's a comprehensive online learning platform for everyone looking to learn and course pro. provinding this platform which is very beneficial for practicals. Students can revise everything at home like dissection and slides
                    </div>
                    <div className= 'profile-details'>
                        <div className= 'profile-pic' style= {{backgroundImage : `url(${christopher})` }}></div>
                        <div className= 'profile-name'>Anshul Jain</div>
                        <div className= 'quotation' style= {{backgroundImage : `url(${quotation})` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;