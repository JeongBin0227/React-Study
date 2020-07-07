const initialState = []

const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

let nextId = 1
export const add_todo = (text) => ({
    type: ADD_TODO,
    todo:{
        text:text,
        id : nextId++
    }
})

export const toggle_todo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export default function todos(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.todo)
        case TOGGLE_TODO:
            return state.map( todo => todo.id === action.id 
                ? {...todo, done:!todo.done} 
                : todo
            )
        default:
            return state
    }
    
}