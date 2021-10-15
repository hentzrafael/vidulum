import React from 'react';
import Navbar from '../../Navbar';
import './EditPage.css'
import EditForm from './EditForm'

export default function CreatePage(){
    const username = sessionStorage.getItem('username')
    return (
        <div>
            <Navbar />
            <div className="edit-container">
                <EditForm url={"http://localhost:5000/"+username+"/edit"} />
            </div>
        </div>
    )
}

