import React, {Component} from 'react';
import './Section.css';

export default class Section extends Component{
    props= {
        title: "",
        description: ""
    }
    render(){
        return (
            <div className="section">
                <h2 className="section-title">{this.props.title}</h2>                             
                <p className="section-description">{this.props.description}</p>
            </div>
        )
    }
}