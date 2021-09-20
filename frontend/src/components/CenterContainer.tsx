import React from 'react';
import '../styles/CenterContainer.css'

export default class CenterContainer extends React.Component {
    props = {
        imgUrl: '',
        alt: ''
    }
    render() {
        return (
            <div className="center-container">
                <div className="image">
                    <img src={this.props.imgUrl} alt={this.props.alt} />
                </div>
            </div>
        );
    }
}  