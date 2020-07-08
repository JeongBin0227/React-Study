import React from "react"
import Todos from "../components/Todos"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, toggleTodo } from "../modules/todos"

function TodosContainer() {
  const { todo } = useSelector((state) => ({
    todo: state.todos.todo,
  }))

  const dispatch = useDispatch()

  const onAddTodo = (text) => dispatch(addTodo(text))
  const onToggleTodo = (id) => dispatch(toggleTodo(id))

  return (
    <Todos todos={todo} onAddTodo={onAddTodo} onToggleTodo={onToggleTodo} />
  )
}

export default TodosContainer
