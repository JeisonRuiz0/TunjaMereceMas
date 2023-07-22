import React from "react";
import TargetComponent from "../../components/TargetComponent";
import './styles/TargetSections.scss';

const TargetSections = () => {
    return (
        <div className="targetSection">
            <div className="targetSection-tittle">
                <div className="targetSection-tittle_text">
                    <h2>Este es nuestro plan de</h2>
                    <h1>Gobierno</h1>
                </div>
                
                <button type="button" class="btn btn-danger">Conoce mas aqui</button>
            </div>
            <div className="targetSection-targets">
            <TargetComponent iconURL="https://img.icons8.com/ios/50/000000/graduation-cap--v1.png" tittleTarget="Cultura" 
            text="La cultura es calidad de vida, permite soñar y conocer el mundo a través del arte y permite conocernos a nosotros mismos y nuestras tradiciones. 
                Tunja es una ciudad cultural por tradición y cuenta con un sinnúmero de agrupaciones culturales que necesitan el apoyo de la administración como actores fundamentales en el desarrollo de la ciudad
                " />    
            <TargetComponent iconURL="https://img.icons8.com/ios/50/000000/graduation-cap--v1.png" tittleTarget="Seguridad" 
            text="Es importante señalar que el desarrollo de los procesos de atención de la dinámicas de construcción de garantías sociales, la seguridad se consolida como un elemento  fundamental no solo en materia de  garantía del orden público sino en materia de  otorgar  
            bienestar, convivencia y construcción de armonía   de las comunidades y los procesos sociales e incluso  familiares" />    

            <TargetComponent iconURL="https://img.icons8.com/ios/50/000000/graduation-cap--v1.png" tittleTarget="Deporte" 
            text="En coordinación con lo señalado se requiere de un potenciamiento de los hábitos de vida saludable y el potenciamiento del deporte como un eje de cambio frente al manejo del tiempo libre de las comunidades de Tunja.
            " />    
            
            <TargetComponent iconURL="https://img.icons8.com/ios/50/000000/graduation-cap--v1.png" tittleTarget="Salud" 
            text="Por otro lado, se puede establecer que con relación a la construcción de valor público y bienestar social, se encuentra asociado, con la identificación 
            de mejores y más garantías en materia de salud para la ciudad de Tunja en el entendido  de que la atención  de las personas, las familias y las comunidades, permiten el fortalecimiento de  integralidad  y bienestar social  como parte de la gestión del gobierno municipal
            " />    
            </div>
        </div>
    );
}

export default TargetSections;