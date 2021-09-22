import  React, {Component}  from 'react';
import '../styles/Navbar.css'
import NavButton from './Button';
import Input from './Input';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
          <NavButton title = "Página Inicial"/>
          <NavButton title = "Criar Usuário"/>
          <NavButton title = "Editar portfólio"/>
          <div className="search">
            <form action="">
                <Input placeholder="Digite aqui"/>
                <NavButton title="Pesquisar"/>
            </form>
          </div>
      </div>
      )
}}

