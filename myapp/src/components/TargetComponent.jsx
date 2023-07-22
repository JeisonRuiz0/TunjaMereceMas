import React from "react";
import './styles/TargetComponent.scss';

const TargetComponent = ({ iconURL, tittleTarget, text }) => {
    return (
        <div className="targetComponent">
            <div className="targetComponent-content">
                <div className="targetComponent-content__tittle">
                    <div className="targetComponent-content__icon">
                        <img src={iconURL} alt="" />
                    </div>
                    <h3>{tittleTarget}</h3>
                    <p>{text}</p>
                </div>                

                <button type="button" class="btn btn-danger">Ver mas</button>
            </div>
        </div>
    );
}

export default TargetComponent;