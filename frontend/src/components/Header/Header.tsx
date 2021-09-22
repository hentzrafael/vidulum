import React, {Component} from 'react';
import Title from '../centerData/Title';
import "./Header.css"

interface HeaderProps {
    title: string,
    biografia?: string,
    photoUrl: string,
}


export default class Header extends Component {
    props: HeaderProps = {
        title: '',
        photoUrl: '',
    }
    render() {
        return (
            <div className="header">
                <div className="header__photo">
                    <img src={this.props.photoUrl} alt="Foto do usuário"/>
                </div>                    
                <div className="header__title">
                    <h1 className="title">{this.props.title}</h1>
                    <hr />
                    <h3>
                        {/* {this.props.biografia} */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex nisi, aliquam vitae massa eu, 
                        venenatis tristique elit. Nam vel consectetur sapien, eu consequat nulla. Vivamus eget elit sed dui facilisis imperdiet quis a lorem. 
                        Quisque vel dolor lacus. Curabitur maximus hendrerit tellus, et finibus eros euismod sed. 
                        Nullam ut velit ut est gravida gravida sed at eros. Curabitur leo nisl, auctor sit amet lectus ac, 
                        pellentesque accumsan diam. Phasellus a neque eu erat tempus vulputate eu et nulla. Pellentesque id laoreet mauris. 
                        Curabitur aliquet nunc et ante luctus, ac dignissim nibh facilisis. 
                        Mauris accumsan felis ac tempor rhoncus. Donec aliquet mollis nibh in elementum.
                    </h3>
                </div>
            </div>
        );
    }
}
