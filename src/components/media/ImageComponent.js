import React, { Component } from 'react';

class ImageComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <img src={this.props.url} alt="Baby Wolves" />
            </div>
        );
    }
}

export default ImageComponent;