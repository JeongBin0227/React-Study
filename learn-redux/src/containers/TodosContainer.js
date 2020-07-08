import React, { useCallback } from "react"
import Todos from "../components/Todos"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, toggleTodo } from "../modules/todos"

function TodosContainer() {
  const { todos } = useSelector((state) => ({
    todos: state.todos,
  }))

  const dispatch = useDispatch()

  const onAddTodo = useCallback((text) => dispatch(addTodo(text)), [dispatch])
  const onToggleTodo = useCallback((id) => dispatch(toggleTodo(id)), [dispatch])

  return <Todos todos={todos} onCreate={onAddTodo} onToggle={onToggleTodo} />
}

export default TodosContainer
