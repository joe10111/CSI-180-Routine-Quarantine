import React from 'react'
import { Spring } from 'react-spring/renderprops'

export default function loadInAnimation() {
    
    return (
        <Spring
        from={{opacity: 1, marginTop: 0}}
        to={{opacity: 0, marginTop: -50}}
        >
             {props => (
        <div style = {props}>
            
       
        </div>
        )}  
        </Spring>
    )
}
