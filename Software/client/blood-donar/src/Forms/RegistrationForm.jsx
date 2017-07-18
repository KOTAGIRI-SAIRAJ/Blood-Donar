import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { Grid, Row, Col ,Panel ,Form ,FormGroup,ControlLabel,Button,FormControl,Radio,Checkbox } from 'react-bootstrap'


class RegistrationForm extends Component {
    render() {
        return (
            <Panel header="panelheading"  bsStyle="primary">
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Panel>
        )
    }
}


export default reduxForm({
    form: 'RegistrationForm'
})(RegistrationForm)

