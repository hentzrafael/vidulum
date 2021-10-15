import React from "react";
import resume from '../../../img/resume.svg'
import './LandingPage.css'


export default function LandingPage() {
  return (
    <div className="landing-container">
        <div className="left">
            <img src={resume} />
        </div>
        <div className="right">
          <h1 className="title">Vidulum</h1>
          <div className="buttons">
            <a href="/create" className="btn-create">Criar</a>
            <a href="/select-user" onClick={() => {
              sessionStorage.removeItem("url")
              sessionStorage.setItem("url","/view")
            }} className="btn-view">Ver</a>
            <a href="/select-user" className="btn-edit" onClick={sessionStorage.setItem("url","/edit")}>Editar</a>
            <a href="/admin" className="backlog">Backlog</a>
          </div>
          
        </div>
    </div>
  );
}