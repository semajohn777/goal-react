import React from 'react'
import GoalItem from './form/GoalItem'

const GoalsArray = (props) => {
    
   
  return (
      <div>
          {props.transferedProps.map((item) => (
            <GoalItem
              key={item.id}
              id={item.id}
              onDel={props.onDekete} 
              >
              <h2 style={{ cursor: "pointer" }} >{item.goal}</h2>
              <button>Delete</button>
          </GoalItem>   
          ))}
    </div>
  )
}

export default GoalsArray