import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            age: null,
            hometown: ''
        };
    }

    handleChange = (evt) => {
        evt.preventDefault();
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <h1>This is Form:</h1>
                <form>
                    <label>first_name:</label>
                    <input type="text"/>
                    <br />
                    <label>last_name:</label>
                    <input type="text"/>
                    <br />
                    <label>age:</label>
                    <input type="text"/>
                    <br />
                    <label>hometown:</label>
                    <input type="text"/>
                    <br />
                </form>
            </div>
        );
    }
}

export default Form;
