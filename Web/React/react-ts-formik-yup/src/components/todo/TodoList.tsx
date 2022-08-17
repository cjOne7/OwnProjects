import React from 'react';
import ITodo from "./todo_interfaces";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: ITodo[]
    crossOut(id: number): void
    removeTodo(id: number): void
}

const TodoList: React.FC<TodoListProps> = ({todos, crossOut, removeTodo}) => {
    return (
        <div>
            {todos.map((todo): JSX.Element =>
                <TodoItem key={todo.id} todo={todo} crossOut={crossOut} removeTodo={removeTodo}/>
            )}
        </div>
    );
};

export default TodoList;