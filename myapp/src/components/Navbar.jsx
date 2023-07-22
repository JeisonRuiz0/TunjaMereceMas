import React from "react";
import './styles/Navbar.scss';
import Icon from '../resources/images/Recurso2.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid navbarContainer">

                <div className="navbarConainerLogo">
                    <a className="navbar-brand" href="#">
                        <img src= {Icon} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>


                <div className="navbarConainerItems">
                    <div className="navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="/">Inicio</a>
                            <a className="nav-link" href="/Perfil">Perfil del candidato</a>
                            <a className="nav-link" href="#">Plan de gobierno</a>
                            <a className="nav-link" href="#">Tu aporte</a>
                        </div>
                    </div>
                </div>


                <div>
                    <button className="btn btn-outline-success" type="submit">Login</button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;