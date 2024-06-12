import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={` fixed top-0 min-h-nav ${isMenuOpen ? 'max-h-screen' : 'max-h-nav'} lg:max-h-nav
          flex flex-col items-center 
          w-full bg-[#000000] bg-opacity-30 
          border-b border-secondary border-opacity-40
          transition-all duration-300 ease-in-out overflow-hidden z-50 backdrop-blur-[3px]           
          `}>
      <div className="flex items-center justify-between px-4 min-h-nav h-nav max-w-screen-xl w-full">
        <img src="horizontal-logo.svg" alt="logo" />
        <ul className={`hidden lg:flex gap-8 font-poppins font-normal lg:flex-row`}>
          <li className="hover:text-secondary">
            <a href="#">Estatíscas</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">Tipos de Lixo</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">Projetos</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">Onde Reciclar</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">Recursos Educacionais</a>
          </li>
        </ul>
        <div className="menu-icon lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="block text-white focus:outline-none">
            <Icon icon="mingcute:menu-fill" className="w-8 h-8" />
          </button>
        </div>
      </div>

      <div className={`flex flex-col px-4 pb-8 pt-4 w-full h-auto`}>
        <ul className={`flex flex-col gap-8 font-poppins font-normal`}>
          <li className="hover:text-secondary">
            <a href="#">Estatíscas</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">Tipos de Lixo</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">Projetos</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">Onde Reciclar</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">Recursos Educacionais</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
