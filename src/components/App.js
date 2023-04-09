import React, { Component } from 'react';
import Overview from './Overview';

//      render input field
//      render submit button
//      on submit... add input to stateful tasks array

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            array: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({value: e.target.value});
    }
    handleSubmit(e) {
        console.log(this.state.value.split(', '));
        e.preventDefault();
        this.setState({submit: true});
        this.setState({array: this.state.value.split(', ')})
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        To do tasks:
                        <input type='text'
                            name='tasks'
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder='separate tasks by ", " (comma + space)'>
                        </input>
                    </label>
                    <button>Submit</button>
                </form>
                <Overview array={this.state.array}/>
            </>
        )
    }
}

export default App;
