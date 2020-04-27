import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoLogic from './TodoLogic'
import './Tasks.js';

function App() {
  //State
  const [tasks, setTodos] = useState([]) //Put save file in UseState([SVAE FILE]); so that it loads the save file. You Need to also save the file to a txt {id: 1, name:'Task', done: false}
  //Var for input feild name value
  const taskNameRef = useRef();
  //var for LocalStorage
  const LOCAL_STORAGE_KEY = 'TodoApp.tasks'
//Loading

useEffect(() =>{ //Useing a useEffect to load in Jason Text parced file witch is called the local_storage_key
  const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) 
  if(storedTasks) setTodos(storedTasks)
}, [])
 //Saving
useEffect(() => { //Saving the Local_storage_key data or bascially the Tasks Data
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])
//Rendering a Toggled a tasks done with a bool 
  function toggleTasks(id){
    const newTasks = [...tasks]
    const task = newTasks .find(task => task.id == id)
    task.done = !tasks.done
    setTodos(newTasks);
    handleClearTasks();
  }
  //Get the current Date
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  var tempDate = new Date();
  var month = monthNames[tempDate.getMonth()];
  var date = 'Daily Rotuine for ' + month + ' ' + tempDate.getDate()+ 'th';
  
  const currDate = date;
//Adding a task function
  function handleAddTaks(e)
  {
const name = taskNameRef.current.value
if(name === '') return
setTodos(currentTasks => {
  return [...currentTasks, {id: Math.random, name, done: false}]
}) 

taskNameRef.current.value = null
  }
 
  //Clearing All tasks
function handleClearTasks() 
{
const newTasks = tasks.filter(tasks => !tasks.done)
setTodos(newTasks)
}

  return (
    //Body Of App
  <div className="App">
    <h1 className = "Title">Routine Quarantine </h1> 
    <p className="Discription"> A helpful tool to track daily routine while in quarantine</p>
      <div className="MenuBar">
        <button className="AddButton" onClick={handleAddTaks}>Add Routine Item</button>
        <input ref={taskNameRef}type="text" />
      </div> 
      <p className="date">{date}: </p>
        <div id = "List-Container">
         <div className="List">
          <div classname="task">
            <TodoLogic tasks={tasks} toggleTasks={toggleTasks}/>
         </div>
        </div>
      </div>
      <footer>
          By Joe Centeno In Visual Code 2019 With 2019 React FrameWork
      </footer>
  </div>
  );
}
//Exporting all of the above
export default App;
