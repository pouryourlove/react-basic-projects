import React, { useState } from 'react'
import "./style.css"


function generateId (){
    return Math.floor(Math.random()*100)
}


function Todo() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')


    const handleSubmit = () => {
        setTodos(todos => todos.concat({
            text:input,//whatever the user typed in goes to the text
            id: generateId()
        })
    )
        setInput('')//clear the input when a new todo has been added
    }

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((item) => item.id !== id))
    }


  return (
    <div>
        <div className='container'>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='new todo'/>
        
        <button onClick={handleSubmit}>submit</button>

        <ul className='todos-list'>
           {
            todos.map(({text,id}) => {
                return( 
                <li key={id} className='todo'>
                    <span>{text}</span>
                    <button className='close' onClick={() => removeTodo(id)}>X</button>
                </li>)
            })
           }

        </ul>

        </div>
    </div>
  )
}

export default Todo