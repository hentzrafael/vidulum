import React from 'react';
import Navbar from '../Navbar';
import '../../styles/CreatePage.css'
import axios from 'axios';
import FormSection from '../FormSection';
import Form from '../Form'

export default function CreatePage(){
    var url = "localhost:5000/create"
    return (
        <div>
            <Navbar />
            <div className="form-container">
                <Form url="http://localhost:5000/create" />
            </div>
        </div>
    )
}

