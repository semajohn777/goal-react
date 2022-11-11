import React, {useState} from "react"
import './components/form/style.css';
import Form from './components/form/Form';
import GoalsArray from './components/GoalsArray';

// const initail_goals = [
//      { id: 1, goal: "life is a challange" },
//      { id: 2, goal: "Coding need practices"}
//  ]
function App() {
  const [goal, setGoals] = useState([])
  const propsHandeler = (enterData) => {
    const dataEnter = {
      id: Math.random().toString(),
      goal: enterData,
    }
    setGoals((prevGoals) => {
      return (
        [dataEnter, ...prevGoals]
      )
    })

    console.log("app added");
    console.log(dataEnter);
  };

  
  const deleteItemHandler = goalId => {
    setGoals(prevGoals => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      console.log(updatedGoals);
      return updatedGoals;
    });

  }
  //  let content = (<p>no item</p>)
  // if (goal.length > 0) {
    
  //   content = (
  //     <GoalsArray transferedProps={goal} onDekete={deleteItemHandler} />
  //   )
  // } 
  return (
    <div className="App">
      <Form onMiddleProps={propsHandeler} />
      {goal.length === 0 && <p style={{textAlign: "center", marginTop: "2rem", fontSize: "1.5rem"}}>No Goals set. Kindly set one!!!</p>}
      {goal.length > 0 && <GoalsArray transferedProps={goal} onDekete={deleteItemHandler} />} 
      {/* <section>
        {content}
      </section> */}
    </div>
  );
}

export default App;
