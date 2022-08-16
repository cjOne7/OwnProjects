import React from 'react';
import {useFormik} from 'formik';

// import {object, string, number, date, InferType} from 'yup';

// let error = object({
//     firstName: string().trim().min(1, 'must be at least 1 characters long').required(),
//     lastName: string().trim().min(1, 'must be at least 1 characters long').required(),
//     email: string().email('must be a valid email'),
// })
//
// type Error = InferType<typeof error>

const validate = (values: any) => {
    const errors: any = {}
    if (!values.firstName) {
        errors.firstName = 'Require';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    } else if (values.firstName.length < 3) {
        errors.firstName = 'must be at least 3 characters long';
    }

    if (!values.lastName) {
        errors.lastName = 'Require';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    } else if (values.lastName.length < 3) {
        errors.lastName = 'must be at least 3 characters long';
    }

    if (!values.email) {
        errors.email = 'Require';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
}

const ContactForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className={'container'} style={{marginTop: '1rem'}}>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor={"email"}>Email*:</label>
                <input
                    id={"email"}
                    name={"email"}
                    type={"email"}
                    value={formik.values.email}
                    onChange={formik.handleChange}/>
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <br/>

                <label htmlFor={"firstName"}>Name*:</label>
                <input
                    id={"firstName"}
                    name={"firstName"}
                    type={"text"}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}/>
                {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                <br/>

                <label htmlFor={"lastName"}>Surname*:</label>
                <input
                    id={"lastName"}
                    name={"lastName"}
                    type={"text"}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}/>
                {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;