import React from 'react'
import axios from 'axios'

function TodoList({todos, setTodos}) {
  const handleClick = (id) => {
    axios.put(`/todos/${id}/complete`)
    .then(response => {
        setTodos(response.data)
      })
  }
  return (
    <ul>
      {todos.map(item =>
      <li
        className={item.completed && "complete"}
        key={item.id}
        onClick={() => handleClick(item.id)}
        >
        {item.title}
      </li>)}
    </ul>
  )
}

export default TodoList