import React from 'react'
import axios from 'axios'

function AddTodo({setTodos}) {
  const handleSubmit = event => {
    event.preventDefault()
    axios.post('/todos', {title: event.target.title.value})
    .then(response => {
        setTodos(response.data)
      })
    event.target.reset()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <button type="submit">Add a fab todo</button>
    </form>
  )
}

export default AddTodo