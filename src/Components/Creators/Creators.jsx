import React from 'react'
import "./Creators.css"
import { topCreators } from './data'

const Creators = () => {
    const watchVideo = () =>{
        window.open('https://youtu.be/Oz9zw7-_vhM')
    }
  return (
    <div className='creators-container'>
        <div className='creators-text'>
            <h3>Creators of the Week</h3>
        </div>
        <div className='creators-cards'>
        {
            topCreators.map(topCreator => (
                
            <div className='creators-card' key={topCreator.creatorName}>
                <div className='creators-card-image'>
                    <img src={topCreator.creatorProfile} alt=""  className='creators-image'/>
                </div>
                <div className='creators-card-details'>
                    <h5>{topCreator.creatorName}</h5>
                    <p>{topCreator.creatorStats}</p>
                </div>
            </div>
            ))
        }
        </div>
        <div className='view-more'>
            <button onClick={watchVideo} className='view-more-btn'>Watch Video</button>
        </div> 
    </div>
  )
}

export default Creators