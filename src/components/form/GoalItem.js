import React from 'react'
import "./style.css"

const GoalItem = (props) => {
    const deleted = () => {
      props.onDel(props.id)  
    }
  return (
      <div className='wrap-component' onClick={deleted}>
         {props.children} 
    </div>
  )
}

export default GoalItem
