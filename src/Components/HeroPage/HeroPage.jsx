import React from 'react'
import Star from "../../Assets/images/Star.svg"
import heroPageImage from "../../Assets/images/heropage-image.png"
import "./HeroPage.css"

const HeroPage = () => {
  return (
    <div className='heropage-container'>
        <div className='heropage-details'>
            <div className='heropage-text'>
                <h2>Create Your <br/>
                    Own <span>NFT Dream</span><br/>
                    Gallery <img src={Star} alt="Star SVG" />
                </h2>
            </div>
            <div className='heropage-image'>
                <img src={heroPageImage} alt="HeroPage Illustration" />
            </div>
        </div>
    </div>
  )
}

export default HeroPage