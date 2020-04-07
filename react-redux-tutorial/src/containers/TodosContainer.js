import React from 'react'
import {connect} from 'react-redux'
import Todos from '../components/Todos'
import {changeInput, insert, toggle, remove} from '../modules/todos'

const TodoContainer = ({changeInput, insert, toggle, remove, input, todos}) => {
  return <Todos onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} input={input} todos={todos}/>
}

export default connect(
  ({todos}) => ({
    input:todos.input,
    todos:todos.todos
  }),
  {
    changeInput,insert,toggle,remove
  }
)(TodoContainer)
// const mapStateToProps = state => ({
//   input: state.todos.input,
//   todos: state.todos
// })
// const mapDispatchToProps = dispatch => ({
//   changeInput: () => {
//     dispatch(changeInput())
//   },
//   insert: () => {
//     dispatch(insert())
//   },
//   toggle: () => {
//     dispatch(toggle())
//   },
//   remove: () => {
//     dispatch(remove)
//   }
// })
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(TodoContainer)