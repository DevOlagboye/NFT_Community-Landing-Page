import React from 'react'
import "./NftCard.css"
import ethImage from "../../Assets/images/ETH.png"
import { NFTs } from './data'

const NftCard = () => {
  return (
    <div className='nftcard-container'>
            {NFTs.map(Nft =>(
                <div className='nftcard'>
                <div className='nftcard-details'>
                <img className='nft-image' src={Nft.nftImage} alt="" />
                <h5 className='nft-name'>{Nft.nftName}</h5>
                <div className='nft-price-number'>
                   <img src={ethImage} alt=""  className='eth-logo'/>
                   <span className='nft-price'>{Nft.nftPrice}</span>
                    <h5 className='nft-price-number-text'>{Nft.amount}</h5>
                </div>
                <hr className='nft-line'/>
                <div className='nft-time-button'>
                 <div className='countdown'>
                    <p>3h 25m 3s</p>
                 </div>
                 <button className='bid'>Place a bid</button>
                </div>
            </div>
            </div>
            ))}
        
    </div>
  )
}

export default NftCard