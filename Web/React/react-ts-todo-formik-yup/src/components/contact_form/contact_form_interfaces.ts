import {ChangeEventHandler} from "react";

export interface IFormInputProps {
    readonly id: string
    readonly name: string
    readonly type?: string
    readonly placeholder?: string
    readonly required?: boolean
    readonly className?: string
    readonly onChange?: ChangeEventHandler<HTMLInputElement>
    readonly value?: string
}