import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation.js';
import TodoForm from './components/TodoForm.js';

import {todos} from "./todos.json";
console.log(todos);

class App extends Component {

  constructor () {
    super();
    this.state = {
      todos
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo (todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  removeTodo (index) {
    console.log(index);
    if (window.confirm('Are you sure you want to delete it?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      });
    } 
  }

  render () {

    console.log("antes de renderizar el componente App.js");
    
    let todos = this.state.todos.map((todo, index) => {
      return (
        <div className="col-md-4" key={index}>
          <div className="card mt-4">
            <div className="card-header" >
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger"> {todo.priority} </span>
            </div>
            <div className="card-body">
              {todo.description}
              <p className="mt-4"><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button 
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, index)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">

        <Navigation title="Aplicacion de tareas" count={this.state.todos.length}/>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>
            <div className="col-md-9">
              <div className="row">
              { todos }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
