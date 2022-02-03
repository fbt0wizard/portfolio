import React from 'react';
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSpring, animated } from 'react-spring';

const HomeText = () => {
    const props = useSpring({
        to: { opacity: 1, x: 0 },
        from: { opacity: 0, x: -500 },
        delay: 200,
    })
    return (
        <animated.h1 style={props}>
            <div className='my-details'>
                <div className="icons">
                    <LinkedInIcon style={iconStyle} />
                    <TwitterIcon style={iconStyle} />
                    <GitHubIcon style={iconStyle} />
                </div>
                <div className="name">
                    <h2>Hello,</h2>
                    <h1>I am <span>OLADIPO</span></h1>
                    <p>I am a front end developer with knowledge in various frontend framework</p>
                    <Link to="/my-projects">VIEW MT WORK</Link>
                </div>
            </div>
        </animated.h1>
    )
}
const iconStyle = {
    margin: "1rem 0"
}

export default HomeText
