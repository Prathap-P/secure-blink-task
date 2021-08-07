import React from 'react';
import '../../css/Footer.css';
import Mail from  '../../assets/Mail.svg';
import Call from  '../../assets/Call.svg';
import Location from  '../../assets/Location.svg';
import Facebook from  '../../assets/Facebook.svg';
import Twitter from  '../../assets/Twitter.svg';
import Github from  '../../assets/Github.svg';
import Linkedin from  '../../assets/Linkedin.svg';

const ContactInfo= (props)=>{   
    return(
        <div className= 'ContactInfo'>
            <span style= {{fontSize: '28px', fontFamily: 'bold'}}>Contact Information</span>
            <div className= 'info-list'>
                <div className= 'info'>
                    <img src= {Mail} className= 'icon'></img>
                    <span className= 'detail'>contact@coursepro.com</span>
                </div>
                <div className= 'info'>
                    <img src= {Call} className= 'icon'></img>
                    <span className= 'detail'>1800-562-895, 1800-869-877</span>
                </div>
                <div className= 'info'>
                    <img src= {Location} className= 'icon'></img>
                    <span className= 'detail'>102 Street, India</span>
                </div>
            </div>

            <div className= 'links-section'>
                <div  style= {{fontSize: '24px', fontFamily: 'bold'}}>Social Media Channel</div>
                <div className= 'links'>
                    <img src= {Facebook} className= 'media-icon' />
                    <img src= {Twitter} className= 'media-icon' />
                    <img src= {Github} className= 'media-icon' />
                    <img src= {Linkedin} className= 'media-icon' />
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;