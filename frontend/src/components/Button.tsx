import React, {Component} from "react";
import '../styles/NavButton.css'

export default class NavButton extends Component {
    props = {
        title: "Default Text",
    }
  render() {
      return (
        <button className="nav-button">
            {this.props.title}
        </button>
      )
    }}
