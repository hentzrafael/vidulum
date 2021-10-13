import React from 'react';
import Navbar from '../Navbar';
import '../../styles/CreatePage.css'
import axios from 'axios';
import FormSection from '../FormSection';
import EditForm from '../EditForm'

export default function CreatePage(){
    return (
        <div>
            <Navbar />
            <div className="form-container">
                <EditForm url="http://localhost:5000/potiana/edit"/>
            </div>
        </div>
    )
}

