import React from 'react';
import TodoItem from "./TodoItem";
import ITodo from "../../interfaces";

type TodoListProps = {
    todos: Array<ITodo>
    checkTodo(id: number): void
    removeTodo(id: number, e: React.MouseEvent): void
}

const TodoList: React.FC<TodoListProps> = ({todos, checkTodo, removeTodo}) => {
    return (
        <ul>
            {todos.map((todo): JSX.Element =>
                <TodoItem key={todo.id} todo={todo}
                          removeTodo={removeTodo}
                          checkTodo={checkTodo}
                />
            )}
        </ul>
    );
};

export default TodoList;