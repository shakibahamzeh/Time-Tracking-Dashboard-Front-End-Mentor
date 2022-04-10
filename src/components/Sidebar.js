import React,{useState} from 'react';
import user from "../images/image-jeremy.png";
import {Link} from "react-router-dom";
import "../styles/sidebar.css";
import "../App.css";
function Sidebar() {


  const Items = [
    { id: 1, text: "Daily" },
    { id: 2, text: "Weekly" },
    { id: 3, text: "Monthly" }
  ];
   const [activeId, setActiveId] = useState();
  return (
    <div className='sidebar'>
        <header className="header">
           <div>
              <img src={user} alt="user"/>
           </div>
            <div>
              <span>Report for</span>
              <p>jeremy</p>
              <p>Robson</p>
            </div>
        </header>
        <section className="menu">
          <ul>
             
                {Items.map(item => ( <Link key={item.id} to={`/${item.text}`}><li  onClick={() => setActiveId(item.id)} className={activeId === item.id ? "active" : "inActive"}>
                                     {item.text} 
          </li>
     
                </Link>))}
                
             
          </ul>
        </section>
    </div>
  )
}

export default Sidebar