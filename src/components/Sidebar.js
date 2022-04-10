import React from 'react';
import user from "../images/image-jeremy.png";
import {Link} from "react-router-dom";
import "../styles/sidebar.css";
import "../App.css";
function Sidebar() {
  return (
    <div className='sidebar'>
        <header className="header">
            <img src={user} alt="user"/>
            <span>Report for</span>
            <p>jeremy</p>
            <p>Robson</p>
        </header>
        <section className="menu">
          <ul>
              <Link to="/daily"><li>daily</li></Link>
              <Link to="/weekly"><li>weekly</li></Link>
              <Link to="/monthly"><li>Monthly</li></Link>
          </ul>
        </section>
    </div>
  )
}

export default Sidebar