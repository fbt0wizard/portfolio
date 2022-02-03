import React from 'react';
import { animated, useSpring } from "react-spring";

const AboutMeText = () => {
    const heading = useSpring({
        loop: false,
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {duration: 700, tension: 100},
        delay: 1500
      })
    return <div className='my-describtion'>
        <div className="text">
            <animated.div style={heading}>
                <p>
                    Hello, My name is Saurav Purohit and I'm from India currently in my 3rd year
                    of college pursuing my undergrad in Bachelor of Technology. I love to solve
                    problems whether it's finding the most elegant way to write lines of code or
                    figuring out which code fits best into progression.I am committed to learning
                    and self-development to achieve better results. I am always open to learning
                    and constructive feedback. <br /> <br />

                    Apart from college, I'm into Front End Web Development. I create interactive
                    and responsive websites and web apps on a daily basis in order me grow and
                    learn a ton of new stuff as a developer. My current tech stack in HTML, CSS,
                    JavaScript and React. Also I enjoy writing technical blogs on hashnode. I also
                    actively surf the web for new resources out there that definitely helps a lot
                    while working on a project. <br /> <br />

                    Other than that I'm interested in Open Source, Artificial Intelligence, Machine
                    Learning and Web 3.0. My hobbies are playing/watching football, reading blogs
                    and self help books, watching OTT contents.
                </p>
            </animated.div>
        </div>
        <div className="call-to-action"></div>

    </div>
}

export default AboutMeText;
