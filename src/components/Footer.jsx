import React from 'react';

const Footer = () => {
  return <div className='footer'>
      <div className="update">
          <form action="">
              <label htmlFor="email">Get update on my latest work</label>
              <input type="email" name="email" id="email" placeholder='Email address' autoComplete='off' autoCapitalize='off'/>
              <button>Subscribe</button>
          </form>
      </div>
      <p>copyright &#169; 2022</p>
  </div>
}

export default Footer;
