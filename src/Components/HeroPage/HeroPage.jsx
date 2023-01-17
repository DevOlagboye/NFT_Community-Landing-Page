import React from 'react'
import Star from "../../Assets/images/Star.svg"
import heroPageImage from "../../Assets/images/heropage-image.png"
import arrowDown from "../../Assets/images/arrow-down.png"
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
                <div className='heropage-sub-details'>
                    <div className='circle'>
                        <img src={arrowDown} alt="Arrow Down Vector" />
                        <p>Discover NFT</p>
                 </div>
                <div className='description'>
                <p>The Larges NFT Marketplace. Automatic and truly <br/>unique digital creation. Signed and issued by the <br/>creator, made possible by blockchain technologies</p>
             </div>
        </div>
        <div className='heropage-stats'>
            <div className='stat'>
                <h5>Artwork</h5>
                <h4>25.1k</h4>
            </div>
            <div className='stat'>
                <h5>Artist</h5>
                <h4>15.6k</h4>
            </div>
            <div className='stat'>
                <h5>Auction</h5>
                <h4>15.6k</h4>
            </div>
        </div>
        </div>
            <div className='heropage-image'>
                <img src={heroPageImage} alt="HeroPage Illustration" />
            </div>
        </div>
        
    </div>
  )
}

export default HeroPage