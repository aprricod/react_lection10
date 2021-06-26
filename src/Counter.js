import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter: this.props.start || 0
        }
        this.handleButton = this.handleButton.bind(this)
    }

    handleButton(e) {
        this.setState({counter: this.state.counter + this.props.step})
    }
    
    render() {
        return (
            <>
            {this.state.counter}
            <br/>
                <button onClick={this.handleButton}>Увеличить значение</button>
            </>
        )
    }
}
