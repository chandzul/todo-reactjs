import React, { Component } from 'react';

class TodoForm extends Component {

    constructor () {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // podemos usar un arrow fuction para no hacer el bind en el constructo
    // handleInput = (e) => {
    handleInput (e) {
        console.log(e.target.value, e.target.name);
        let { value, name } = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('Sending Data ...');
        console.log(this.state);
    }

    render () {
        return (
            <div className="TodoForm" >
                <div className="card mt-4">
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        
                        <div className="form-group">
                            <input 
                                type="text"
                                name="title"
                                className="form-control"
                                placeholder="title"
                                onChange={this.handleInput}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="text"
                                name="responsible"
                                className="form-control"
                                placeholder="Responsible"
                                onChange={this.handleInput}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="Description"
                                onChange={this.handleInput}
                            />
                        </div>

                        <div className="form-group">

                            <select 
                                name="priority"
                                className="form-control"
                                onChange={this.handleInput}
                            >
                                
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary">Save Todo</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default TodoForm;