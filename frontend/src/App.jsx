import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import {Todos} from './components/Todo'

function App() {
  const [todos , setTodos] = useState([]);

  // fetch('http://localhost:3002/todos')
  // .then(async (res)=>{
  //   const json = await res.json();
  //   setTodos(json.todos);
  // } )
return <div>
   < CreateTodo />
   <Todos todos = {todos}></Todos>
</div>
}

export default App
