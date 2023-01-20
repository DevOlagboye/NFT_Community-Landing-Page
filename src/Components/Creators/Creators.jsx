import React from 'react'
import creator1 from "../../Assets/creators/Wallet.svg"
import "./Creators.css"

const Creators = () => {
  return (
    <div className='creators-container'>
        <div className='creators-text'>
            <h3>Creators of the Week</h3>
        </div>
        <div className='creators-cards'>
            <div className='creators-card'>
                <div className='creators-card-image'>
                    <img src={creator1} alt=""  className='creators-image'/>
                </div>
                <div className='creators-card-details'>
                    <h5>Eka Prakasa</h5>
                    <p>13.2K</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Creators