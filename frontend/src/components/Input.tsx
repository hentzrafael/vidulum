import React from 'react';
import '../styles/Input.css'

export default class Input extends React.Component<any, any> {
    props = {
        placeholder: ""
    }

    render() {
        return(
            <input type="text" className="input" placeholder={this.props.placeholder} />
        )
    }}