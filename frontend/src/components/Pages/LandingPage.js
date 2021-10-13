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
          
          <a href="/create">Criar</a>
          <a href="/view">ver</a>
          <a href="/edit">Editar</a>
        </div>
    </div>
  );
}