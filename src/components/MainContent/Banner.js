import React from 'react';
import '../../css/Banner.css';

const Banner= (props)=>{   
    return(
        <div className= 'Banner'>
            <div className= 'banner-content'>
                <div className= 'bigger-text'>
                    Anytime, Anywhere<br/>
                    Learn On Your Schedule<br/>
                    From Any Device
                </div>
                <div className= 'smaller-text'>
                    We Believe everyone has the capacity to be creative<br/>
                    <span style= {{color:'white'}} >Course Pro</span> is a place where people develop their own potential
                </div>
                <div className= 'button-grp'>
                    <button className= 'start-btn'>Let's Get Start</button>
                </div>
            </div>

            <div className= 'banner-img' />

            <div className= 'banner-bottom'>
                <div className= 'summary'>
                    <span className= 'tag'>Total Students</span>
                    <br/>
                    <span className= 'count'>5140</span>
                </div>
                <div className= 'summary'>
                    <span className= 'tag'>Partners</span>
                    <br/>
                    <span className= 'count'>4123</span>
                </div>
                <div className= 'summary'>
                    <span className= 'tag'>Affiliate Distribution</span>
                    <br/>
                    <span className= 'count'>4.18 Lac</span>
                </div>
            </div>
        </div>
    );
}

export default Banner;