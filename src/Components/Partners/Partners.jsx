import React from 'react'
import "./Partners.css"
import {ourPartners} from "./data"

const Partners = () => { 
  return (
    <div className='partners-container'>
        <div className='partners'>
           {ourPartners.map(ourPartner => (
            <div key={ourPartner.key}>
                <img src={ourPartner.partnerProfile} alt="Our partners" />
            </div>
           ))}
        </div>
    </div>
  )
}

export default Partners