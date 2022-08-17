import React from 'react';
import {useFormik} from 'formik'
import './contact_form_styles.css'
import FormInput from "./contact_from_ui/FormInput";
import {IFormInputProps} from './contact_form_interfaces'

const validate = (values: any) => {
    const errors: any = {}
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors
}

const ContactForm: React.FC = () => {
    // const [contactFormInfo, setContactFormInfo] = useState<IContactFormInfo>();
    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            secondName: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
        }
    })

    const firstNameFormInput: IFormInputProps = {
        id: 'firstName',
        name: "firstName",
        required: true,
        className: "form__field",
        placeholder: "First name",
        onChange: formik.handleChange,
        value: formik.values.firstName
    }

    const secondNameFormInput: IFormInputProps = {
        id: 'secondName',
        name: "secondName",
        required: true,
        className: "form__field",
        placeholder: "Second name",
        onChange: formik.handleChange,
        value: formik.values.secondName
    }

    const emailFormInput: IFormInputProps = {
        id: 'email',
        name: "email",
        required: true,
        className: "form__field",
        placeholder: "email",
        onChange: formik.handleChange,
        value: formik.values.email,
        type: 'email'
    }

    return (
        <div className={'container'}>
            <form onSubmit={formik.handleSubmit}>
                <div className="form__group field">
                    <FormInput formInputFields={firstNameFormInput}/>
                    <label htmlFor="firstName"
                           className="form__label">
                        First name
                    </label>
                    {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                </div>
                <div className="form__group field">
                    <FormInput formInputFields={secondNameFormInput}/>
                    <label htmlFor="secondName"
                           className="form__label">
                        Second name
                    </label>
                    {formik.errors.secondName ? <div>{formik.errors.secondName}</div> : null}
                </div>
                <div className="form__group field">
                    <FormInput formInputFields={emailFormInput}/>
                    <label htmlFor="email"
                           className="form__label">
                        Email
                    </label>
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
                <input type="submit" value={'Submit'}/>
            </form>
        </div>
    );
};

export default ContactForm;