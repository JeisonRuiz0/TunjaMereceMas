import React, { useState } from "react";
import Icon from '../resources/images/Recurso2.png';
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-light fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4">

        <div className="flex items-center">
          <a href="/">
            <img src={Icon} alt="" width="30" height="24" className="d-inline-block align-text-top" />
          </a>
        </div>

        <div className="hidden md:flex space-x-4">
          <a className="text-blue-600 hover:text-blue-800" href="/">Inicio</a>
          <a className="text-blue-600 hover:text-blue-800" href="/Perfil">Perfil del candidato</a>
          <a className="text-blue-600 hover:text-blue-800" href="#">Plan de gobierno</a>
          <a className="text-blue-600 hover:text-blue-800" href="#">Tu aporte</a>
        </div>

        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}
            className="inline-block bg-transparent text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 py-2 px-4 rounded"
          >
            Menú
          </button>

          <Transition
            show={isMenuOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div ref={ref} className={`absolute top-0 left-0 h-screen w-500 bg-white shadow-lg md:w-auto md:top-auto md:right-auto md:relative md:flex md:space-x-4 ${isMenuOpen ? "block" : "hidden"}`}>
                <a className="block text-blue-600 hover:text-blue-800 py-2 px-4" href="/">Inicio</a>
                <a className="block text-blue-600 hover:text-blue-800 py-2 px-4" href="/Perfil">Perfil del candidato</a>
                <a className="block text-blue-600 hover:text-blue-800 py-2 px-4" href="#">Plan de gobierno</a>
                <a className="block text-blue-600 hover:text-blue-800 py-2 px-4" href="#">Tu aporte</a>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
