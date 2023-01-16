import React from 'react'
import "./NavBar.css"
import NftLogo from "../../Assets/images/ApolloNFT.png"

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo'>
            <img src={NftLogo} alt="Apollo NFT Logo" />
        </div>
    </div>
  )
}

export default NavBar