import React from "react";
import resume from '../../../img/resume.svg'
import './LandingPage.css'
import Button from '@mui/material/Button';



export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="row">
        <div className="col-md-6 col-sm-12">
            <img src={resume} className="img-responsive"/>
        </div>
        <div className="col-md-6 col-sm-12">
          <h1 className="title">Vidulum</h1>
          <div className="buttons">
            <Button variant="contained" action={()=>{
              navigate('/create')
            }}>Criar</Button>
            <a href="/create" className="btn bg-info">Criar</a>
            <a href="/select-user" onClick={() => {
              sessionStorage.removeItem("url")
              sessionStorage.setItem("url","/view")
            }} className="btn bg-info">Ver</a>
            <a href="/select-user" className="btn bg-info" onClick={sessionStorage.setItem("url","/edit")}>Editar</a>
            <a href="/admin" className="btn bg-info">Backlog</a>
          </div>
          
        </div>
      </div>
    </div>
  );
}