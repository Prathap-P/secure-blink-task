import React from 'react';
import '../../css/Courses.css';
import clock from '../../assets/clock.svg';
import calender from '../../assets/calender.svg';
import genImg from '../../assets/craig.png';

const Course= (props)=>{   
    let {img, tag, name, students, duration, lectures, lecturer, lectImg, origPrice, offPrice}= props;

    return(
        <div className= 'Course'>
            <div className= 'img'></div>
            <div className= 'Info'>
                <div className= 'name'>Name</div>
                <div className= 'students'>543 Students</div>
                <div className= 'misc'>
                    <div className= 'duration'><img src= {clock} className= 'icons' />11hr 20 mins</div>
                    <div className= 'lectures'><img src= {calender} className= 'icons'/>44 Lectures</div>
                </div>
                <div className= 'extra'>
                    <div className= 'lectImg'></div>
                    <div className= 'lecturer'>Albert</div>
                    <div className= 'price'><span className= 'origPrice'>$2000</span> <strike>$5435</strike></div>
                </div>
            </div>
        </div>
    );
}

export default Course;