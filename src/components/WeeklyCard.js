import React from 'react';
import "../styles/card.css";
import "../App.css";
function WeeklyCard({data}) {
  return (
    
        <div className='card'>
                  <p className='title'>{data.title}</p>
                  <h2>{data.timeframes.weekly.current} hrs</h2>
                  <p className='previous'>last week - {data.timeframes.weekly.previous} hrs</p>
                  </div>
   
  )
}

export default WeeklyCard