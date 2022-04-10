import React from 'react';
import data from "../services/data.json";
import "../styles/daily.css";
import DailyCard from "../components/DailyCard";

function Daily() {
    console.log(data[0].timeframes.daily.current);
  return (
    <div className='daily'>
      {
          data.map((item,index)=> {return(<DailyCard key={index} data={item}/>)
          }
          )
      }
    </div>
  )
}

export default Daily