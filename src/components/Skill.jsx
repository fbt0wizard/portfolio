import React from 'react';
import { useSpring, animated } from 'react-spring';
import js from "../skills/js.webp";
import html from "../skills/html.png";
import css from "../skills/css.svg";
import sql from "../skills/sql.webp";
import mongo from "../skills/mongo.webp";
import node from "../skills/node.webp";
import boostrap from "../skills/boostrap.webp";
import react from "../skills/react.webp";
import php from "../skills/php.png";
import sass from "../skills/sass.png";
import seo from "../skills/seo.png";
import mui from "../skills/mui.png";

const Skill = () => {
  const styles = useSpring({
    loop: false,
    from: { rotateZ: 0, opacity: 0, y:100 },
    to: { rotateZ: 1440, opacity: 1, y:0 },
    config: {duration: 1500, tension: 100},
    delay: 500
  })
  const heading = useSpring({
    loop: false,
    from: { opacity: 0, fontSize: "4rem" },
    to: { opacity: 1, fontSize: "1rem" },
    config: {duration: 500, tension: 100},
    delay: 300
  })
  return <div className='skill'>
    <animated.div style={heading}>
    <h1>My Skills</h1>
    </animated.div>
    <div className="skill-images">
      <animated.div style={styles}>
        <div className="html">
          <img src={html} alt="" />
        </div>
      </animated.div>
      <animated.div style={styles}>
        <div className="css">
          <img src={css} alt="" />
        </div>
      </animated.div>
      <animated.div style={styles}>
      <div className="sass">
        <img src={sass} alt="" />
      </div>
      </animated.div>
      <animated.div style={styles}>
      <div className="boostrap">
        <img src={boostrap} alt="" />
      </div>
      </animated.div>
      <animated.div style={styles}>
      <div className="js">
        <img src={js} alt="" />
      </div>
      </animated.div>
      <animated.div style={styles}>
      <div className="react">
        <img src={react} alt="" />
      </div>
      </animated.div>
      <animated.div style={styles}>
      <div className="mui">
        <img src={mui} alt="" />
      </div>
      </animated.div>
      <animated.div style={styles}>
      <div className="node">
        <img src={node} alt="" />
      </div>
      </animated.div>
      <animated.div style={styles}>
      <div className="mongo">
        <img src={mongo} alt="" />
      </div>
      </animated.div>
      <animated.div style={styles}>
      <div className="sql">
        <img src={sql} alt="" />
      </div>
      </animated.div>
      <animated.div style={styles}>
      <div className="php">
        <img src={php} alt=""/>
      </div>
      </animated.div>
      <animated.div style={styles}>
      <div className="seo">
        <img src={seo} alt=""/>
      </div>
      </animated.div>
    </div>

  </div>
}

export default Skill;
