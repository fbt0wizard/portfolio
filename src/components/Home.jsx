import React, { useState, useEffect } from 'react';
import HomeImage from './HomeImage';
import HomeText from './HomeText';
import Skill from './Skill';


const Home = ({ pics }) => {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = "Moroof Oladipo Mustapha || Portfolio";
      },[]);

    return (
        <div className="parent">
            <div className='homepage'>
                <HomeText />
                <HomeImage pics={pics} />
            </div>
            <hr />
            <Skill />
        </div>
    )
}

export default Home
