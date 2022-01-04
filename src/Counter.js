import React from 'react'

class Counter extends React.Component {
    
    static defaultProps = {start: 0, step: 1}
    
        state = {
             counter: this.props.start || 0
        }
    
    handleButton=(e)=> {
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
export default Counter