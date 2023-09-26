import { Component } from "react";
import PropTypes from 'prop-types';

class Greet extends Component {
    render() {
        const { age } = this.props
        const { name } = this.props
        return (
            <h1>he ya, my name is {name}. i'm {age} years old</h1>
        )
    }
}

Greet.propTypes = {
    age: PropTypes.number,
    name: PropTypes.string,
};

Greet.defaultProps = {
    name: 'unnamed',
    age: '999'
};


export default Greet;