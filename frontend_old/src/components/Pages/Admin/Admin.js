import React, { Component } from "react";
import axios from 'axios';
import './Admin.css'
import Navbar from "../../Navbar";

export default class AdminPage extends Component{
    constructor(props){
        super(props)
        this.getUsers()
        this.state = {
            "username":"",
            "password":"",
            "users":[]
        }

        this.handleInputChange =this.handleInputChange.bind(this) 
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    async getUsers(){
        const response = await axios.get("http://localhost:5000/all")
        this.setState({
            "users": response.data.users
        })
    } 

    handleInputChange(e){
        this.setState({
            [e.target.name]: e.target.value
            
        })

}
    handleSubmit(e){
        e.preventDefault();
        if(this.state.username !== "admin"){
            const data = {"username":this.state.username, "password":this.state.password}
            axios.post("http://localhost:5000/admin/delete", data)
    }
    }

    render(){
    return (
        <div>
            <Navbar />
            <div className="admin-container">
            <div className="users-present">
                <h1>Usuários cadastrados</h1>
                <ul>
                {this.state.users.map((element)=>{
                    return(
                    <li>{element}</li>
                    )
                })}
                </ul>
            </div>
            <form>
            <label for="username">
                Usuário a ser apagado:
                <input type="text" name="username"id="username" onChange={this.handleInputChange}/>
            </label>
            <label for="password">
                Senha do admin:
                <input type="password" name="password"id="password" onChange={this.handleInputChange}/>
            </label>
            <button type="submit" className="submit-btn" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
        </div>
    )
}}