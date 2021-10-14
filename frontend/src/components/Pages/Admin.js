import React, { Component } from "react";
import Link from 'react-router-dom'
import axios from 'axios';

export default class AdminPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            "username":"",
            "password":""
        }

        this.handleInputChange =this.handleInputChange.bind(this) 
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleInputChange(e){
        this.setState({
            [e.target.name]: e.target.value
            
        })
        console.log(this.state)

}
    handleSubmit(e){
        e.preventDefault();
        const data = {username:"jornada",password:"admin"}
        axios.delete("http://localhost:5000/admin/delete", data)
    }

    render(){
    return (
        <div className="admin-container">
            <form>
            <label for="usename">
                Usuário a ser apagado:
                <input type="text" name="username"id="username" onChange={this.handleInputChange}/>
            </label>
            <label for="password">
                Senha do admin:
                <input type="text" name="password"id="password" onChange={this.handleInputChange}/>
            </label>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
    )
}}