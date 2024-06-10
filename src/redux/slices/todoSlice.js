// TODO: todoSlice 를 작성하세요.
import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
            );
        },
    }
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer