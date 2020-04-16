import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    render() {
        const { buttonText,
            action,
            className
        } = this.props;
        return (
            <div>
                Yo!
            </div>
        )
    }
}

export default Button;