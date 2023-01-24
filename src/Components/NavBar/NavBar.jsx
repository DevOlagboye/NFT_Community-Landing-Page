import React , {useState}  from 'react'
import { Drawer } from 'antd'
import "./NavBar.css"
import NftLogo from "../../Assets/images/ApolloNFT.png"
import {FaBars} from "react-icons/fa"

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const showMenu = () =>{
        setOpen(true)
    }
    const hideMenu = () =>{
        setOpen(false)
    }
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
        <button onClick={showMenu} className="">
                <FaBars/>
            </button>
            <Drawer placement='left' onClose={hideMenu} open={open}>
            <ul>
                <li>Drop</li>
                <li>Marketplace</li>
                <li>Creator</li>
                <li>Community</li>
            </ul>
            </Drawer>
    </div>
  )
}

export default NavBar