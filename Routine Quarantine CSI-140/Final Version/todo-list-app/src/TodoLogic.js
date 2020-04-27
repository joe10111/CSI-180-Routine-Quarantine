import React from 'react';
import Tasks from './Tasks'


export default function TodoLogic({ tasks, toggleTasks }) {
    return (
        
         tasks.map(tasks =>{
                return <div className = "task">
                    <Tasks key={tasks.id} toggleTasks={toggleTasks} tasks={tasks} />
                    
                        </div>
            })
            

    )
}
