import React, {Component} from 'react';
import './Section.css';

interface SectionProps{
    title: string,
    description: string
}

export default class Section extends Component{
    props: SectionProps = {
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