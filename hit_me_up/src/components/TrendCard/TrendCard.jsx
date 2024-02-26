import React from 'react'
import './TrendCard.css'
import {TrendData} from '../../Info/TrendData.jsx'
const TrendCard = () => {
  return (
   <div className="TrendCard">
       <h3>Trends for you</h3>


       {TrendData.map((trend, id)=>{
            return(
                <div className="trend" key={id}>
                    <span>#{trend.name}</span>
                    <span>{trend.shares}k shares</span>
                </div>
            )
       })}
       <br />
       <button className="button r-button" /*onClick={() => setModalOpened(true)}*/>
        Share
      </button>
   </div>
  )
}

export default TrendCard