import React, {useState} from 'react'
import "./NftCard.css"
import {Modal} from "antd"
import ethImage from "../../Assets/images/ETH.png"
import { NFTs } from './data'

const NftCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () =>{
        setIsModalOpen(true)
    }
    const handleMint = () =>{
        setIsModalOpen(false)
    }
    const handleCancel = () =>{
        setIsModalOpen(false)
    }
  return (
    <div className='nftcard-container'>
            {NFTs.map(Nft =>(
                <div className='nftcard'  key={Nft.nftName}>
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
                 <button className='bid' onClick={showModal}>Place a bid</button>
                </div>
                <Modal  title="Mint Hope Ape NFT" key={Nft.nftName} open={isModalOpen}
                okText={"Mint"}
                cancelText={"Not Yet"}
                onOk={handleMint} onCancel={handleCancel}>
                    <p>We are Minting {Nft.nftName} </p>
                    <img src={Nft.nftImage} alt="" />
                </Modal>
            </div>
            </div>
            ))}
        
    </div>
  )
}

export default NftCard