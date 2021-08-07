import React from 'react';
import Banner from './MainContent/Banner.js';
import Courses from './MainContent/Courses.js';
import Earners from './MainContent/Earners.js';
import Testimonials from './MainContent/Testimonials.js';
import Referrel from './MainContent/Referrel.js';

const MainContent= (props)=>{   
    return(
        <div className= 'MainContent'>
            <Banner />
            <Courses />
            <Earners />
            <Referrel />
            <Testimonials />
        </div>
    );
}

export default MainContent;