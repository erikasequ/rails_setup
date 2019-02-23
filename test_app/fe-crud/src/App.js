import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

// REMEMBER that you can dynamically INTERPOLATE the id of
// each record in the array of objects when you're INSIDE a .map()

class App extends Component {
  constructor() {
    super();
    // added super() in advance to get rid of errors

    this.state = {
      // These are for the fetch calls. users for the whole collection
      users: [],
      user: {},

      // These are for my table/input fields
      first_name: '',
      last_name: '',
      age: '',
      hometown: ''
    }
    console.log('init', this.state.users);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const allUsers = await Axios.get('http://localhost:3000/users');
      console.log('fetched', allUsers.data);
      this.setState({
        users: allUsers.data
      });
    } catch (err) { console.log(err); }
    // this isn't proper error handling but I'm being lazy :P
  }

  handleChange = (evt) => {
    // this handleChange function is set up to dynamically target 
    // the name prop and value prop of each input element
    // and set what's written in the input field to state.

    const { name, value } = evt.target;

    this.setState({ [name]: value });
  }

  handleUpdate = async (id) => {
    try {
      const url = `http://localhost:3000/users/${id}`;
      
      const body = {
        "users" : {
          "first_name": this.state.first_name,
          "last_name": this.state.last_name,
          "age": this.state.age,
          "hometown": this.state.hometown
        }
      }

      const updateUser = await Axios.put(url, body);
      // the PUT request requires two arguments: url, and the body that contains the template of 
      console.log('updated', updateUser);
      

    } catch (err) { console.log(err) }
  }

  render() {
    const renderUsers = this.state.users ?
      this.state.users.map((eachUser) => {
        return (
          <div key={eachUser.id}>
            <p>{eachUser.first_name}</p>
            <p>{eachUser.last_name}</p>
            <p>{eachUser.age}</p>
            <p>{eachUser.hometown}</p>
            <br />
            <form>
              <label>first_name:</label>
              <input type="text" onChange={this.handleChange} name='first_name' value={this.state.first_name}/>
              <br />
              <label>last_name:</label>
              <input type="text" onChange={this.handleChange} name='last_name' value={this.state.last_name}/>
              <br />
              <label>age:</label>
              <input type="text" onChange={this.handleChange} name='age' value={this.state.age}/>
              <br />
              <label>hometown:</label>
              <input type="text" onChange={this.handleChange} name='hometown' value={this.state.hometown}/>
              <br />
              <button onClick={ () => this.handleUpdate(eachUser.id) }>Update User</button>
            </form>
          </div>
        );
      })
      : <h1>Waiting...</h1>

    return (
      <div className="App">
        <h1>Hello Epiphany</h1>
        <br />
        <div>{ renderUsers }</div>
      </div>
    );
  }
}

export default App;
