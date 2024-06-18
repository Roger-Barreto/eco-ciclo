import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickScrollDown = (id: string) => {
    document.getElementById(`${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={` fixed top-0 min-h-nav ${isMenuOpen ? 'max-h-screen' : 'max-h-nav'} lg:max-h-nav flex flex-col items-center w-full bg-[#000000] bg-opacity-30 border-b border-secondary border-opacity-40 transition-all duration-300 ease-in-out overflow-hidden z-50 backdrop-blur-[3px]`}>
      <div className="flex items-center justify-between px-4 min-h-nav h-nav max-w-[90vw] w-full">
        <img src="horizontal-logo.svg" alt="logo" />
        <ul className={`hidden lg:flex gap-8 font-poppins font-normal lg:flex-row`}>
          <li className="hover:text-secondary">
            <button role="a" onClick={() => onClickScrollDown('statistics-section')}>
              Estatísticas
            </button>
          </li>
          <li className="hover:text-secondary">
            <button role="a" onClick={() => onClickScrollDown('trash-types-section')}>
              Tipos de Lixo
            </button>
          </li>
          <li className="hover:text-secondary">
            <button role="a" onClick={() => onClickScrollDown('projects-section')}>
              Projetos
            </button>
          </li>
          <li className="hover:text-secondary">
            <button role="a" onClick={() => onClickScrollDown('how-to-section')}>
              Como Reciclar
            </button>
          </li>
          <li className="hover:text-secondary">
            <button role="a" onClick={() => onClickScrollDown('resources-section')}>
              Recursos Educacionais
            </button>
          </li>
        </ul>
        <div className="menu-icon lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="block text-white focus:outline-none">
            <Icon icon="mingcute:menu-fill" className="w-8 h-8" />
          </button>
        </div>
      </div>

      <div className={`flex flex-col px-4 pb-8 pt-4 w-full h-auto bg-[#080F0B]`}>
        <ul className={`flex flex-col gap-8 font-poppins font-normal`}>
          <li className="hover:text-secondary">
            <button
              role="a"
              onClick={() => {
                onClickScrollDown('statistics-section');
                setIsMenuOpen(false);
              }}>
              Estatísticas
            </button>
          </li>
          <li className="hover:text-secondary">
            <button
              role="a"
              onClick={() => {
                onClickScrollDown('trash-types-section');
                setIsMenuOpen(false);
              }}>
              Tipos de Lixo
            </button>
          </li>
          <li className="hover:text-secondary">
            <button
              role="a"
              onClick={() => {
                onClickScrollDown('projects-section');
                setIsMenuOpen(false);
              }}>
              Projetos
            </button>
          </li>
          <li className="hover:text-secondary">
            <button
              role="a"
              onClick={() => {
                onClickScrollDown('how-to-section');
                setIsMenuOpen(false);
              }}>
              Como Reciclar
            </button>
          </li>
          <li className="hover:text-secondary">
            <button
              role="a"
              onClick={() => {
                onClickScrollDown('resources-section');
                setIsMenuOpen(false);
              }}>
              Recursos Educacionais
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
