import React from 'react';
import MonthlyCard from './MonthlyCard';
import data from "../services/data.json";
import "../styles/monthly.css";

function Monthly() {
  return (
    <div className='monthly'>
      {
          data.map((item,index)=> {return(<MonthlyCard key={index} data={item}/>)
          }
          )
      }
    </div>
  )
}

export default Monthly