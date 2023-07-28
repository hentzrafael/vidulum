import React, {Component} from 'react';
import Navbar from '../../Navbar';
import './InformUser.css'
import blankUser from '../../../img/blank-user.svg'
import { Link } from 'react-router-dom';

export default class InformUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            "username":''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)

}
    handleSubmit(e){
        e.preventDefault();
        sessionStorage.setItem("username",this.state.username)
        console.log(sessionStorage.getItem("url"))
        window.location.href = sessionStorage.getItem("url")
        
        // axios.post(this.props.url, data)
}

    render(){
        return(
            <div className="inform-container">
                <Navbar/>
                <form className="inform-form">
                    <img className="blank-user" src={blankUser}/>
                    <label for="username">
                        Username:
                    <input name="username" id="username" type="text" onChange={this.handleInputChange}/>
                    </label>
                    <button className="submit-btn" type="submit" onClick={this.handleSubmit}>Visualizar</button>
                </form>
            </div>
        )
    }


}