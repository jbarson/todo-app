import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
  const [todos, setTodos] = useState([])

  // let variable = "fred"
  // variable="Joe"

  useEffect(() => {
    axios.get('/todos')
      .then(response => {
        setTodos(response.data)
      })
  }, [])

  return (
    <div className="App App-header">
      <h1>Fabulous Busy Todos</h1>
      <AddTodo setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
