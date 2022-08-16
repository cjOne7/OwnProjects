import React from 'react';
import ITodo from "../../interfaces";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import './todo.css';

interface TodoItemProps {
    todo: ITodo

    checkTodo(id: number): void

    removeTodo(id: number, e: React.MouseEvent): void
}

const TodoItem: React.FC<TodoItemProps> = ({todo, checkTodo, removeTodo}) => {
    const classes: string[] = ['todo']
    if (todo.completed) {
        classes.push('completed')
    }
    return (
        <li className={classes.join(' ')}>
            <label>
                <input type="checkbox"
                       checked={todo.completed}
                       onChange={() => checkTodo(todo.id)}
                />
                <span>{todo.title}</span>
                <FontAwesomeIcon icon={faTrash} className={'icon'}
                                 onClick={(e: React.MouseEvent) => removeTodo(todo.id, e)}/>
            </label>
        </li>
    );
};

export default TodoItem;