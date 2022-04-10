import React from 'react';
import "../styles/card.css";
import "../App.css";

function DailyCard({data}) {
  return (
   
        <div className='card'>
                  <p className='title'>{data.title}</p>
                  <h2>{data.timeframes.daily.current}hr</h2>
                  <p className='previous'>last week - {data.timeframes.daily.previous} hrs</p>
        </div>
   
  )
}

export default DailyCard;