import React from 'react'
import "./LiveAuction.css"
import liveAuction from "../../Assets/images/LIVE-AUCTION.png"

const LiveAuction = () => {
  return (
    <div className='liveauction-img'>
        <img src={liveAuction} alt="" />
    </div>
  )
}

export default LiveAuction