import React from 'react';
import {IFormInputProps} from "../contact_form_interfaces";

interface FormInputProps {
    readonly formInputFields: IFormInputProps
}

const FormInput: React.FC<FormInputProps> = ({formInputFields}) => {
    return (
        <input id={formInputFields.id}
               name={formInputFields.name}
               className={formInputFields.className}
               onChange={formInputFields.onChange}
               value={formInputFields.value}
               placeholder={formInputFields.placeholder}
        />
    );
};

export default FormInput;