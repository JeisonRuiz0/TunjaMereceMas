import React from "react";
import './styles/DocumentInfoSectionContrast.scss';


const DocumentInfoSectionContrast = ({ tittle, description, urlImage }) => {
    return (
        <div className="documentInfoSectionContrast">

            <div className="documentInfoSectionContrast__Image">
                <img src={urlImage} alt="" />
            </div>
            
            <div className="documentInfoSectionContrast__Info">
                
                <h1>{tittle}</h1>
                <p>{description}</p>
                <button type="button" class="btn btn-danger">Ver mas</button>

            </div>


        </div>
    );
}

export default DocumentInfoSectionContrast;



