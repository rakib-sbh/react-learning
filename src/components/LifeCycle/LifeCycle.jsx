import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        console.log("Constructor called in the component");
    }

    componentDidMount() {
        console.log("Component Mounted");
    }

    shouldComponentUpdate() {
        console.log("Component should update");
        return true;
    }

    componentDidUpdate() {
        console.log("Componenet updated");
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        { console.log("render called") }
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
}

export default LifeCycle;