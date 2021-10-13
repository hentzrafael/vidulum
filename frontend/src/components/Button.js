import React, {Component} from "react";
import '../styles/Button.css'

export default function Button(props) {
    return (
        <button className="nav-button">
            {props.title}
        </button>
      )
}
