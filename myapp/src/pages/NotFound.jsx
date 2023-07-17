import React from "react";
import notFoundImg from'../resources/images/notFound.jpg';
import './styles/NotFound.scss';

const NotFound = () => {
    return (
        <div className="notFound">
            <img src={notFoundImg} alt="" />
        </div>

    )
}

export default NotFound;