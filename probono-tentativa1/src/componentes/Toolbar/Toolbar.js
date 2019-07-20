import React from 'react';
import './Toolbar.css';

const toolbar = props =>(
        <header className= "toolbar">
        <nav className = "toolbar_navigation">
            <div></div>
            <div className = "toolbar_logo"><a href="/">Probono</a></div>
            <div className = "space2"/>
            <div className = "toolbar_navigation_itens">
                <ul>
                    <li><a href="/">Cadastro </a></li>
                    <li><a href="/">Preparação </a></li>
                    <li><a href="/">Casos </a></li>
                    <li><a href="/">Atividades </a></li>
                    <li><a href="/">Calculadora </a></li>
                    <li><a href="/">Audiências </a></li>
                </ul>
            </div>
            <div className = "space"/>
            <div><a href="/">Logout </a></div>
        </nav>
    </header>
);

export default toolbar;