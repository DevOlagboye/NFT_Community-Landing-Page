import React from 'react'
import walletImage from "../../Assets/images/Wallet.png"
import "./SellNft.css"

const SellNft = () => {
  return (
    <div className='sell-nft-container'>
        <div className='sell-nft-text'>
            <h3>Create Your Sell NFT</h3>
        </div>
        <div className='sell-nft-cards'>
            <div className='sell-nft-card'>
                <img src={walletImage} alt="" />
                <h5>Connect Wallet</h5>
                <p>This growth plan will help you reach <br/> your resolutions and achieve the <br/>goals you have been striving <br/>towards.</p>
            </div>
        </div>
    </div>
  )
}

export default SellNft