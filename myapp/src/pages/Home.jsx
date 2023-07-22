import React from "react";
import './styles/Home.scss';
import Navbar from "../components/Navbar";
import CardCarousel from "../components/CardCarousel";
import TargetSections from "./Home-Sections/TargetSections";
import DocumentInfoSection from "./Home-Sections/DocumentInfoSection";
import DocumentInfoSectionContrast from "./Home-Sections/DocumentInfoSectionContrast";

import dataImage from '../resources/images/Data.png';
const Home = () => {
    return (
        <div className="homeContainer">
            <Navbar/>
            <CardCarousel/>
            <TargetSections/>
            <DocumentInfoSection
                tittle="Prosperidad social"
                description= "Este principio puede entenderse como una apuesta de mejora de las condiciones de vida de las y los ciudadanos, estableciendo mejoras a sus condiciones de vida desde un enfoque de vida digna, donde las garantías y derechos fundamentales son la base de construcción del bienestar de las comunidades, así como la construcción de la legitimidad de las decisiones del gobierno municipal, teniendo como precepto fundamental la “democracia de cercanía”, es decir, el acercamiento a los habitantes, para generar transformaciones favorables para todos, encaminando acciones para la superación de la pobreza y las desigualdades, el inconformismo social y la falta de garantías institucionales frente a las problemas y necesidades de los tunjanos."
                urlImage="https://media.istockphoto.com/id/1380899530/es/foto/plaza-de-la-ciudad-de-tunja-con-estatua-de-sim%C3%B3n-bol%C3%ADvar-y-la-catedral-de-la-plaza-colombia.jpg?s=612x612&w=0&k=20&c=LDBnjUZuNLjV0QPqXsy55hnJMClbAlyMguWtfnWQd7c="
                />

            <DocumentInfoSectionContrast
                tittle="Seguridad"
                description= "Es importante señalar que el desarrollo de los procesos de atención de la dinámicas de construcción de garantías sociales, la seguridad se consolida como un elemento fundamental no solo en materia de garantía del orden público sino en materia de otorgar bienestar, convivencia y construcción de armonía de las comunidades y los procesos sociales e incluso familiares, como se puede apreciar en la siguiente gráfica"
                urlImage= {dataImage}
                />
        </div>
    );
}

export default Home;