import React from 'react';
import '../styles/CenterContainer.css'
import Title from './centerData/Title';
import Header from './Header/Header';

export default class CenterContainer extends React.Component {
    props = {
        imgUrl: '',
        alt: ''
    }
    render() {
        return (
            <div className="center-container">
                <Header title="Tiago Mazzutti" biografia="Eu sou tiago"photoUrl="https://pbs.twimg.com/profile_images/1362784994188476420/om5lsyFF_400x400.png"/>
            </div>
        );
    }
}  