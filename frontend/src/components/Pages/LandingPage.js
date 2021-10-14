import React from "react";
import resume from '../../img/resume.svg'
import '../../styles/Landing.css'


export default function LandingPage() {
  return (
    <div className="container">
        <div className="left">
            <img src={resume} />
        </div>
        <div className="right">
          <h1 className="title">Vidulum</h1>
          <div className="buttons">
            <a href="/create" className="btn-create">Criar</a>
            <a href="/view" className="btn-view">Ver</a>
            <a href="/edit" className="btn-edit">Editar</a>
            <a href="/admin" className="backlog">Backlog</a>
          </div>
          
        </div>
    </div>
  );
}