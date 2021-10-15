import React, {Component} from 'react';
import Title from '../Title';
import "./Header.css"


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-photo">
                    <img src={this.props.photoUrl} alt="Foto do usuário"/>
                </div>                    
                <div className="header-title">
                    <h1 className="title">{this.props.title}</h1>
                    <h5 className="bio">
                        {this.props.biografia}
                    </h5>
                </div>
            </div>
        );
    }
}
