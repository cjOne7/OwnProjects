import React, {useEffect, useState} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import ITodo from "./todo_interfaces";
import './todo_styles.css'

declare var confirm: (question: string) => boolean

const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(savedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (todoText: string): void => {
        const newTodo: ITodo = {
            id: Date.now(),
            title: todoText,
            completed: false
        }
        setTodos([newTodo, ...todos])
    }

    const crossOut = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }))
    }
    const removeTodo = (id: number): void => {
        if (confirm('Are you sure?')) {
            setTodos(todos.filter(todo => todo.id !== id))
        }
    }
    return (
        <div className={'container'}>
            <TodoForm onAdd={addTodo}/>
            <TodoList todos={todos} crossOut={crossOut} removeTodo={removeTodo}/>
        </div>
    );
};

export default TodoPage;