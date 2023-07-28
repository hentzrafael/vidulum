import React from 'react';
import Form from '../../Forms/Form';
import Navbar from '../../Navbar';
import './CreatePage.css';

export default function CreatePage(){
    var url = "localhost:5000/create"
    return (
        <div>
            <Navbar />
            <div className="create-container">
                <Form url="http://localhost:5000/create" />
            </div>
        </div>
    )
}

