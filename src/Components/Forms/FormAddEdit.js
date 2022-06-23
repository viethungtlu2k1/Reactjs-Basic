// import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from "reactstrap";
function FormAddEdit(props) {
    // const [values, setValues] = useState({});
    const validationSchema = Yup.object().shape({
        code: Yup.string()
            .max(15, 'Must be 5 characters or less')
            .required('Required'),
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        description: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required')
    })
    let initialValues = {}
    if (props.lable === "Edit") {
        initialValues = {
            id: props.item.id,
            code: props.item.code,
            name: props.item.name,
            description: props.item.description
        }
    } else {
        initialValues = {
            id: null,
            code: '',
            name: '',
            description: '',
        }
    }
    const handleEdit = (item) => {
        // setUsers(users.map(user => (user.id === id ? updatedUser : user)));
        console.log(item);
        props.setData(props.data.map(country => (country.id === item.id ? item : country)));
        props.toggle();
    }
    const handleAdd = (item) => {
        item.id = props.data.length + 1;
        let newData = [...props.data, item];
        props.setData(newData);
        props.toggle();
    }
    const handleSubmit = (form, { setSubmitting }) => {
        setSubmitting(false);
        if (props.lable === "Edit") {
            handleEdit(form);
        } else {
            handleAdd(form);
        }
    }
    return (<Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(form, setSubmitting) => handleSubmit(form, setSubmitting)}
        enableReinitialize
    >
        <Form>
            <label htmlFor="code">Code</label>
            <Field name="code" type="text" className="form-control" />
            <span className="text-danger">
                <ErrorMessage name="code" />
            </span>
            <br />
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className="form-control" />
            <span className="text-danger">
                <ErrorMessage name="name" />
            </span>
            <br />
            <label htmlFor="description">Description</label>
            <Field name="description" type="text" className="form-control" />
            <span className="text-danger">
                <ErrorMessage name="description" />
            </span>
            <br />
            <Button
                type='submit'
                className={props.lable === "Edit" ? "btn btn-warning mr-15" : "btn btn-success mr-15"}
            >
                {props.lable === "Edit" ? "Save" : "Add"}
            </Button>
            <Button
                onClick={props.toggle}
                className="btn btn-secondary"
            >
                Cancel
            </Button>
        </Form>
    </Formik >);
}

export default FormAddEdit;