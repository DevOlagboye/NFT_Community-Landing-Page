import React from 'react'
import "./Footer.css"
import footerLogo from "../../Assets/images/ApolloNFT.png"

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-details'>
          <div className='footer-logo-text'>
            <div className='footer-logo'>
              <img src={footerLogo} alt="Apollo Logo" />
              <h5>This growth plan will help you reach<br/> your resolutions and achieve the goals <br/> you have been striving towards.</h5>
            </div>
            <div className='footer-social-icons'>
              
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer