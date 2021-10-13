import React, {Component} from "react";
import '../styles/Title.css'

export default function Title() {

        return (
            <div className="portfolio-title">
                <h1>{"props.title"}</h1>
            </div>
        )
    }