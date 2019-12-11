import React, { useReducer } from 'react';
import {ADD_TODO} from './reducer'

function NewTodo(props) {

    const [state, dispatch] = useReducer(
        props.reducer,
        props.initial
    )

    const addTodo = event => {
        event.preventDefault()
        dispatch({
            type: ADD_TODO,
            payload: event.target.text.value
        })
        console.log(state)
    }

  return (
    <div className="App">
    <h3>New Todo:</h3>
        <form onSubmit={addTodo}>
            <input name='text' placeholder='Todo text here' />
            <button type='submit'>Add</button>
        </form>
    </div>
  );
}

export default NewTodo;
