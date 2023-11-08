import React from 'react';
import "../App.css";
import {SidebarData} from  './SidebarData'

function Sidebar() {
   return(
  <div className="Sidebar">
     <div className="SidebarTitle">
        <h1 id='plan'>MyPlanner</h1>
      </div>
     <ul className="SidebarList">
       {SidebarData.map((val,key) => {
        return(
        <li 
         key={key}
         className="row"
         id={window.location.pathname == val.Link ? "active" : ""} 
         onClick={() => {
          window.location.pathname = val.Link;
         }}
        >
        <div id="icon" className={val.title === "Important" ? "important-icon" : ""}>
              {val.icon}
            </div>
       <div id="title">{val.title}</div>
      </li>
      );
     })}
   </ul>
  </div>
  );
}

export default Sidebar;