import React from "react";
import './styles/DocumentInfoSection.scss';


const DocumentInfoSection = ({tittle, description, urlImage}) => {
    return (
        <div className="documentInfoSection">
            <div className="documentInfoSection__Info">
                <h1>{tittle}</h1>
                <p>{description}</p>
                <button type="button" class="btn btn-danger">Ver mas</button>

            </div>

            <div className="documentInfoSection__Image">
                <img src={urlImage} alt="" />
            </div>
        </div>
    );
}

export default DocumentInfoSection;



