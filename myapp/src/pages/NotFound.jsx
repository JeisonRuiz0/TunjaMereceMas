import React from "react";
import notFoundImg from'../resources/images/LogoCL-011.png';
import './styles/NotFound.scss';




const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFound-components">
                <div className="notFound-components__image">
                    <img src={notFoundImg} alt="notFound" />
                </div>

                <div className="notFound-components__tittle">
                    <h1>Nos encontramos en mantenimiento!</h1>
                    <p>Estamos preparando todo para que puedas enterarte de todo acerca de la mejor propuesta para Tunja :)</p>
                </div>
                
                <div className="nofFound-components__button">
                    <a href="/">
                        <button type="button" class="btn btn-danger">Intentar de nuevo !</button>
                    </a>
                    
                </div>
                

            </div>
        </div>

    )
}

export default NotFound;