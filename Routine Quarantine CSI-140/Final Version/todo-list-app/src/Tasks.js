import React from 'react'
import "./App.css"
import { Spring } from 'react-spring/renderprops'
import Draggable from 'react-draggable'

export default function Tasks({tasks, toggleTasks}) {
    
    function handleTaskClick(){
        toggleTasks(tasks.id)
    }
    return (
    <Draggable 
     axis="x"
     handle=".handle"
     defaultPosition={{x: 0, y: 0}}
     >
    <Spring 
    from={{opacity: 0, marginTop: -50}}
    to={{opacity: 1, marginTop: 0}}>
        {props => (
        <div className="handle">
            <div style = {props}>
             <label>
                {tasks.name} 
                 <button className="ClearButton" onClick={tasks.done} onClick={handleTaskClick}>  x</button> 
             </label>
            </div>
        </div>
        )}
    </Spring>
    </Draggable>
    )
}

