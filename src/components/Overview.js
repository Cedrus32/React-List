import React, { Component } from 'react';
import PropTypes from 'prop-types'

//      render each tasks in stateful tasks array as item in list

class Overview extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleDeleteClick(e) {
        const index = e.target.id;
        this.setState({array: this.props.array.splice(index, 1)})
    }

    render() {
        const items = this.props.array.map((item, index) => 
            <>
                <li key={index}>{index + 1}. {item}</li>
                <button id={index} onClick={this.handleDeleteClick}>X</button>
                <button id={index} onClick={this.handleEditClick}>Edit</button>
            </>
        )
        return (
            <ul>
                {items}
            </ul>
        )
    }
}
Overview.propTypes = {
    array: PropTypes.array.isRequired,
    submit: PropTypes.bool.isRequired,
  }

export default Overview;
