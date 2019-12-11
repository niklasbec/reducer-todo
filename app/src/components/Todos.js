import React, {useReducer} from 'react';
import NewTodo from './NewTodo';
import { initialState, reducer, COMPLETE } from './reducer'
import styled from 'styled-components'


export const Button = styled.a`
    width: 10vw;
    background: transparent;
    color: white;
    border: 2px solid white;
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
`

export function Todos() {

    const [state, dispatch] = useReducer(
        reducer,
        initialState
    )

    const complete = event => {
        event.preventDefault()

        let filtered = state.todos.filter((curr) => {
            return curr.text === event.target.parentNode.children[0].innerText
        })
        
        filtered.done = !filtered.done
        dispatch({
            type: COMPLETE,
            payload: {...state, filtered}
        })
    }

  return (
    <div className="App">
      {initialState.todos.map((curr) => {
          return(
          <div className='todo' key={curr.id}>
            <p>{curr.text}</p>
            <p>{curr.id}</p>
            <Button onClick={complete}>Mark complete</Button>
          </div>
      )})}
      <NewTodo reducer={reducer} initial={initialState}/>
    </div>
  );
}


