import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
    const [todoText, setTodoText] = useState<string>('');
    const addTodo = (): void => {
        if (todoText) {
            onAdd(todoText)
            setTodoText('')
        }
    }

    const keyPressHandler = (e: KeyboardEvent): void => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }

    return (
        <InputGroup className="my-3">
            <Button variant="outline-secondary" id="button-addon1" onClick={() => addTodo()}>
                Enter
            </Button>
            <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder={'Enter text'}
                value={todoText}
                onKeyPress={(e: KeyboardEvent) => keyPressHandler(e)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value)}
            />
        </InputGroup>
    );
};

export default TodoForm;