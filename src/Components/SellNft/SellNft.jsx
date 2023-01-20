import React from 'react'
import walletImage from "../../Assets/images/Wallet.png"
import sellImage from "../../Assets/images/Buy.png"
import collectImage from "../../Assets/images/Category.png"
import "./SellNft.css"

const SellNft = () => {
  return (
    <div className='sell-nft-container'>
        <div className='sell-nft-text'>
            <h3>Create Your Sell NFT</h3>
        </div>
        <div className='sell-nft-cards'>
            <div className='sell-nft-card'>
                <img src={walletImage} alt="Connect wallet icon" />
                <h5>Connect Wallet</h5>
                <p>This growth plan will help you reach <br/> your resolutions and achieve the <br/>goals you have been striving <br/>towards.</p>
            </div>
            <div className='sell-nft-card'>
                <img src={sellImage} alt="NFT Marketplace Icon" />
                <h5>NFT Marketplace</h5>
                <p>This growth plan will help you reach <br/> your resolutions and achieve the <br/>goals you have been striving <br/>towards.</p>
            </div>
            <div className='sell-nft-card'>
                <img src={collectImage} alt="Collect Icon" />
                <h5>Collect NFT</h5>
                <p>This growth plan will help you reach <br/> your resolutions and achieve the <br/>goals you have been striving <br/>towards.</p>
            </div>
        </div>
    </div>
  )
}

export default SellNft