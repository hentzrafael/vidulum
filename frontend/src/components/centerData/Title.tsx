import React, {Component} from "react";
import '../..//styles/Title.css'

export default class Title extends Component {
    props = {
        "title": '',
    }

    render() {
        return (
            <div className="portfolio-title">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}