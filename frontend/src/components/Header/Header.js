import React, {Component} from 'react';
import Title from '../Title';
import "./Header.css"


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__photo">
                    <img src={this.props.photoUrl} alt="Foto do usuário"/>
                </div>                    
                <div className="header__title">
                    <h1 className="title">{this.props.title}</h1>
                    {/* <hr /> */}
                    <h3>
                        {this.props.biografia}
                    </h3>
                </div>
            </div>
        );
    }
}
