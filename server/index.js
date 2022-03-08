const express = require('express')
const morgan = require('morgan')
const {v4: uuid} = require('uuid')

const app = express()
app.use(morgan('tiny'))
app.use(express.json())

const todos = [
  {
    id: 1,
    title: 'Create a Todo App',
    completed: false
  }
]

app.get('/todos', (_req, res) => {
  res.status(200).json(todos)
})

app.post('/todos', (req, res) => {
  const newTodo = {
    id: uuid(),
    title: req.body.title,
    completed: false
  }
  todos.push(newTodo)
  res.status(201).json(todos)
 })

 app.put('/todos/:id/complete', (req, res) => {
  const completedTodo = todos.find( item => item.id.toString() === req.params.id)
  completedTodo.completed = true
  res.status(201).json(todos)
  })


app.listen(4000, () => console.log('listening on 4000'))