import React from 'react'
import "./NavBar.css"
import NftLogo from "../../Assets/images/ApolloNFT.png"

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo'>
            <img src={NftLogo} alt="Apollo NFT Logo" />
        </div>
        <div className='nav-list'>
            <ul>
                <li>Drop</li>
                <li>Marketplace</li>
                <li>Creator</li>
                <li>Community</li>
            </ul>
        </div>
        <div className='nav-button'>
            <button>Contact Us</button>
        </div>
    </div>
  )
}

export default NavBar