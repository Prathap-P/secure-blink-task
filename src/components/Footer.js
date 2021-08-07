import React from 'react';
import ContactInfo from './Footer/ContactInfo.js';
import ContactForm from './Footer/ContactForm.js';
import FooterBottom from './Footer/FooterBottom.js';
import '../css/Footer.css';

const Footer= (props)=>{   
    return(
        <div className= 'Footer'>
            <div style= {{color: '#01CB63', fontSize: '18px', margin: '10px'}} >Contact Us</div>
            <div className= 'footer-info'>Reach Out With Any Question You Have</div>
            <div className= 'group'>
                <ContactInfo />
                <ContactForm />
            </div>
            <FooterBottom />
        </div>
    );
}

export default Footer;