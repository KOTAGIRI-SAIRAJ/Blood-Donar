import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap';
export const fields = [ 'username', 'email', 'age' ]


const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }   
    return errors
}

class SimpleForm extends Component {
    render() {
        const { fields: { username, email, age }, resetForm, handleSubmit, submitting } = this.props
        return (

            <form onSubmit={handleSubmit}>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
                <div >
                    <label>Username</label>
                    <div>
                        <input type="text" placeholder="Username" {...username}/>
                    </div>

                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <input type="text" placeholder="Email" {...email}/>
                    </div>

                </div>
                <div>
                    <label>Age</label>
                    <div>
                        <input type="text" placeholder="Age" {...age}/>
                    </div>
                </div>
                <div>
                    <Button bsStyle="primary" type="submit" disabled={submitting}>
                        {submitting ? <i/> : <i/>} Submit
                    </Button>
                    <Button bsStyle="primary" type="button" disabled={submitting} onClick={resetForm}>
                        Clear Values
                    </Button>
                </div>
            </form>
        )
    }
}

SimpleForm.propTypes = {
    fields: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
}

export default reduxForm({
    form: 'simple',
    fields,
    validate
})(SimpleForm)

