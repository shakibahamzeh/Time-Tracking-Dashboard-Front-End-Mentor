import React from 'react';
import "../styles/card.css";
import "../App.css";
function MonthlyCard({data}) {
  return (
    
        <div className='card'>
                  <p className='title'>{data.title}</p>
                  <h2>{data.timeframes.monthly.current}hrs</h2>
                  <p className='previous'>last week - {data.timeframes.monthly.previous} hrs</p>
        </div>
   
  )
}

export default MonthlyCard;