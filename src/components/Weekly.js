import React from 'react';
import data from "../services/data.json";
import "../styles/weekly.css";
import WeeklyCard from './WeeklyCard';

function weekly() {
    console.log(data[0].timeframes.daily.current);
  return (
    <div className='weekly'>
      {
          data.map((item,index)=> {return(<WeeklyCard key={index} data={item}/>)
          }) 
      }
    </div>
  )
}

export default weekly;