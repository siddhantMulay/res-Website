
import React, { Component } from 'react';

class Base extends Component {

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

export default Base;