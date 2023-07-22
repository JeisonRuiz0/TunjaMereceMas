import React from "react";
import Navbar from "../components/Navbar";
import './styles/CandidateProfile.scss';
import StudiesSection from "./CandidateProfile-Sections/StudiesSection";


const CandidateProfile = () => {
    return (
        <div className="candidateProfile">
            <Navbar/>
            <StudiesSection/>
        </div>
    );
}


export default CandidateProfile;