import React from 'react';
import '../../css/Referrel.css';
import referrelImg from '../../assets/Referrel.svg';

const Referrel= (props)=>{   
    return(
        <div className= 'Referrel'>
            <div style= {{color: '#01CB63', fontSize: '18px', padding: '10px 0px'}} className= 'referrel-title' >Refer</div>
            <div className= 'referrel-info' >How it's Work</div>
            <img src= {referrelImg} className= 'referrel-img' />
        </div>
    );
}

export default Referrel;