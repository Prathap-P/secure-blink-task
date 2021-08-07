import React from 'react';
import '../../css/Footer.css';

const FooterBottom= (props)=>{   
    return(
        <div className= 'FooterBottom'>
            <div className= 'copy-right'>2021-2022 © Course Pro Private Limited</div>
            <div className= 'footer-misc'>
                <div style= {{justifySelf : 'right'}}>Term & Condition</div>
                <div style= {{justifySelf : 'left'}}>Privacy Policy</div>
            </div>
        </div>
    );
}

export default FooterBottom;