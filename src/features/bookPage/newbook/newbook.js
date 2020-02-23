import React, { Component } from 'react';

import { Form, Row, Col, Button } from 'react-bootstrap';
import classes from './newbook.module.css';

class newbook extends Component {
    state = {
        name: {
            value: '',
            rules: {
                isRequired: true
            },
            isValid: false
        },
        author: {
            value: '',
            rules: {
                minLength: 5,
                maxLength: 10,
                isRequired: true
            },
            isValid: false
        },
        isAllValid: false
    }

    handleOnChange = (event, label) => {
        let preState = { ...this.state };
        preState[label].value = event.target.value;

        let isValid = this.validation(preState[label].value, preState[label].rules)
        preState[label].isValid = isValid;

        console.log(isValid);
        this.setState({
            name: preState.name,
            author: preState.author
        });

    }

    validation(value, rules) {
        let isValid = true;

        if (rules.isRequired) {
            isValid = isValid && !!value;
        }

        if (rules.maxLength){
            isValid = isValid && value.length <= rules.maxLength;
        }

        if (rules.minLength){
            isValid = isValid && value.length >= rules.minLength;
        }

        return isValid;
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <h1>Creat a new book </h1>
                </div>

                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">
                            Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                placeholder="Name"
                                onChange={(event) => this.handleOnChange(event, 'name')}
                                value={this.state.name.value} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">
                            Author
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                placeholder="Author"
                                onChange={(event) => this.handleOnChange(event, 'author')}
                                value={this.state.author.value} 
                                isInvalid={!this.state.author.isValid}/>
                            
                        </Col>
                    </Form.Group>
                    <Button disabled={!this.state.name.isValid || !this.state.author.isValid}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default newbook;
