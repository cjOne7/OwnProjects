import React, {useState, useRef} from 'react';

interface TodoFormProps {
    addTodo(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
    // const ref = useRef<HTMLInputElement>(null);
    // const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    //     if (e.key === 'Enter') {
    //         console.log(ref.current!.value);
    //         props.addTodo(ref.current!.value)
    //         ref.current!.value = ''
    //     }
    // }

    const [title, setTitle] = useState<string>('');
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => setTitle(e.target.value)
    const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            props.addTodo(title)
            setTitle('')
        }
    }
    return (
        <div className={"input-field"} style={{marginTop: "30px"}}>
            <input id={"title"}
                   // ref={ref}
                   value={title}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
                   onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => keyPressHandler(e)}
            />
            <label htmlFor={" title"} className={'active'}>
                Enter text
            </label>
        </div>
    );
};

export default TodoForm;