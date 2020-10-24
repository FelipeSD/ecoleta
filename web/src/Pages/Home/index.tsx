import React from 'react';
import logo from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';

// carrega single pages sem atualizar página
import { Link } from 'react-router-dom' // conceito de SPA

import './Home.css'

const Home = () => {
    return(
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta"/>
                </header>
                <h1>Seu marketplace de coleta de resíduos.</h1>
                <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>
                <Link to="/create-point">
                    <span>
                        <FiLogIn/>
                    </span>
                    <strong>Cadastre um ponto de coleta</strong>
                </Link>
            </div>
        </div>
    )
}

export default Home;