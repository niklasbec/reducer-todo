
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE = 'COMPLETE'
export const DELETE = 'DELETE'

export const initialState = {
    todos: [
        {text: 'Learn reducers',
        done: false,
        id: 8998244984389,
    },
    {text: 'Learn react',
        done: false,
        id: 2348483874345,
    },
    {text: 'Learn vue',
        done: false,
        id: 2389523984234,
    }
    ]
}

export function reducer(state, action) {
    switch(action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, {
                text: action.payload,
                done: false,
                id: new Date(),
            }]}
        case COMPLETE:
            return {...state, todos: action.payload}
        default:
            return state
    }
}