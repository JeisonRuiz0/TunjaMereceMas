import React from "react";
import './styles/CardCarousel.scss';
import candidate from '../resources/images/candidate.png';

const CardCarousel = () => {
    return (
        <div className="cardCarousel">
            <div className="cardCarousel-info">

                <div className="cardCarousel-info__subTittle">
                    <div><h5>con</h5></div>
                    
                    <h3>Cesar López</h3>
                </div>

                <div className="cardCarousel-info__pricipalTittle">
                    <h1>Tunja Gana</h1>
                </div>
                
                <p>Ganar será posible a partir de un liderazgo
                    comprometido con el manejo eficiente de
                    los recursos públicos, cero tolerancia a la
                    corrupción, el fortalecimiento de las
                    instituciones públicas orientadas al servicio
                    al ciudadano, la incorporación y
                    aprovechamiento de las TIC, la
                    participación ciudadana y el control social.</p>
                <button type="button" class="btn btn-danger">Tu aporte</button>
            </div>

            <div className="cardCarousel-image">
                <div className="cardCarousel-image-logo">
                </div>
            </div>
        </div>
    );
};

export default CardCarousel;
