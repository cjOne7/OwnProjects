import React from 'react';
import ITodo from "./todo_interfaces";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'

interface TodoItemProps {
    todo: ITodo
    crossOut(id: number): void
    removeTodo(id: number): void
}

const TodoItem: React.FC<TodoItemProps> = ({todo, crossOut, removeTodo}) => {
    const classes: string[] = ['mb-3', 'todo']
    if (todo.completed) {
        classes.push('completed')
    }
    return (
        <div className={`${classes.join(' ')}`}>
            <input type="checkbox" onChange={() => crossOut(todo.id)} checked={todo.completed}/>
            <span>{todo.title}</span>
            <FontAwesomeIcon icon={faTrash} className={'icon'} onClick={() => removeTodo(todo.id)}/>
        </div>
    );
};

export default TodoItem;