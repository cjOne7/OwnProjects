import React, {useEffect, useState} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import ITodo from "../../interfaces";

declare var confirm: (question: string) => boolean

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (title: string): void => {
        if (title) {
            const newTodo: ITodo = {
                id: Date.now(),
                title: title,
                completed: false
            }
            setTodos(prevState => [newTodo, ...prevState])
        }
    }

    const checkTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const removeTodo = (id: number, e: React.MouseEvent): void => {
        e.preventDefault()
        //don't use alone confirm(), because of error from TS, use only with window object or declare the same signature
        if (confirm('Are you sure?')) {
            setTodos(todos.filter(todo => todo.id !== id))
        }
    }
    return (
        <div className={'container'}>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} checkTodo={checkTodo} removeTodo={removeTodo}/>
        </div>
    );
};

export default TodosPage;