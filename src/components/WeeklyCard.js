import React from 'react';
import "../styles/card.css";
import "../App.css";
function WeeklyCard({data}) {
  return (
    <div className='cardContainer'>
      <div className='image-container'></div>
       <div className='card'>
                  <div className='cardTitle'>
                    <div>
                    <p className='title'>{data.title}</p>
                  </div>
                  <div>
                    <p>...</p>
                  </div>
                  </div>
                  <div className='cardTime'>
                  <div>
                    <h2>{data.timeframes.weekly.current}hr</h2>
                  </div>
                  <div>
                    <p className='previous'>last week - {data.timeframes.weekly.previous} hrs</p>
                  </div>
                  </div>
        </div>
    </div>
       
   
  )
}

export default WeeklyCard