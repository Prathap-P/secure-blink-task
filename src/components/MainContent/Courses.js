import React from 'react';
import '../../css/Courses.css';
import Course from './Course.js';

const Courses= (props)=>{   
    return(
        <div className= 'Courses'>
            <div className= 'title'>
                <div style= {{color: '#01CB63', fontSize: '18px'}} >Courses</div>
                <br/>
                <div className= 'courses-info' >Our most popular courses</div>
            </div>
            <br/>
            <div className= 'courses-list'>
                <Course />
                <Course />
                <Course />
            </div>
        </div>
    );
}

export default Courses;