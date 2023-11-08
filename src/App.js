import React from 'react';
import './App.css';
// import { Todo } from './componenets/todo';
import { Todowrapper } from './componenets/todowrapper';
import Sidebar from './componenets/Sidebar';
function App() {
  return (
    <div className="App " >
      <div id='side'>
   <Sidebar />
   </div>
  <div id='to'>
    <Todowrapper /> 
    </div>
     {/* <Todo /> */}
    {/* <Todoform /> */}
    {/* <Edittodoform/> */}
      </div>
  );
}

export default App;
