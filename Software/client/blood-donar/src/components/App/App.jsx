import React, { Component } from 'react';
import { Values } from 'redux-form-website-template';
import showResults from '../../showResults/showResults'
import SimpleForm from '../../simpleForm/simpleForm';
import  RegistrationForm  from '../../Forms/RegistrationForm'
import { Jumbotron } from 'react-bootstrap'

export default class App extends Component {
  /*
   * Component render()
   * see: https://facebook.github.io/react/docs/reusable-components.html#es6-classes
   */
    render() {
        return (
            <div>
                <RegistrationForm />
            </div>
        );
    }
}
