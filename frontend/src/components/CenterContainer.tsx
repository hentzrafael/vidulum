import React from 'react';
import '../styles/CenterContainer.css'
import Title from './centerData/Title';

export default class CenterContainer extends React.Component {
    props = {
        imgUrl: '',
        alt: ''
    }
    render() {
        return (
            <div className="center-container">
                <div>
                    <img className="image" src={this.props.imgUrl} alt={this.props.alt} />
                </div>
                <Title title="Bergamo GAY" />
            </div>
        );
    }
}  