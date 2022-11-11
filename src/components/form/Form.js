import React, { useState } from 'react'

const Form = (props) => {
    const [todo, setTodo] = useState("")
    const [valid, setValid] = useState(false)
    

    const formHandler = (e) => {
        e.preventDefault()
        if (todo.trim().length === 0) {
            setValid(true)
            // setIsValid(false)
            return;
    }

    props.onMiddleProps(todo)
    setTodo("")
        console.log(todo);
    }
    const onchangehandler = (e) => {
        setTodo(e.target.value)
        setValid(false)
    }

    

  return (
      <div>
          
          <form onSubmit={formHandler} className={`${valid ? "invalid" : ""}`}>
              {/* or like dis style={{borderColor: valid ? "red" : "" }}  */}
                <label htmlFor="">Set Goals</label>
              <div >
                  <input className='input' type="text" value={todo} onChange={onchangehandler } />
              </div>
              <button type='submit'>Set Goals</button>
            {valid && <p className='err'>Pls Enter any goal</p>}
          </form>
    </div>
  )
}

export default Form