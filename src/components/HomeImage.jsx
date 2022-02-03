import React from 'react';
import { useSpring, animated, useTransition } from 'react-spring';

const HomeImage = ({ pics }) => {
    const show = true;
    const transitions = useTransition(show, {
        from: { opacity: 0, x: 500 },
        enter: { opacity: 1, x: 0 },
        leave: { opacity: 0, x: 500 },
        reverse: show,
        delay: 200,
        config: { duration: 1000 }
    })
    return transitions(
        (styles, item) => item && <animated.div style={styles}>
            <div className='image'>
                <img src={pics} alt="" />
            </div>
        </animated.div>
    )
}

export default HomeImage;
