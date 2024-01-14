import React from 'react'
import { Todo, Todos } from '../models'
import TodoCard from './TodoCard'
import './styles.css'



const TodosComponent: React.FC<Todos> = ({todos, setTodos}) => {

  const handleCompleted = (id: number) => {
    const newTodosArray = todos.map((todo) => todo.id === id? {...todo, isCompleted: !todo.isCompleted} : todo);
    setTodos(newTodosArray);
  }

  const handleDelete = (id: number) => {
    const newTodosArray = todos.filter((todo) => todo.id !== id && todo);
    setTodos(newTodosArray);
  }

  return (
    <div className="todos-container">
    {
      todos.map((todoItem) => <TodoCard key={todoItem.id} {...todoItem} {...{handleCompleted, handleDelete, todos, setTodos}} />)
    }
    </div>
  )
}

export default TodosComponent
