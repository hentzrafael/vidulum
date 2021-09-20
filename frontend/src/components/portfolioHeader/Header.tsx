import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__title">
                    <h1>Portfolio</h1>
                </div>
                <div className="header__subtitle">
                    <h2>
                        I'm a front-end developer with a passion for building
                        beautiful, responsive websites.
                    </h2>
                </div>
            </div>
        );
    }
}
