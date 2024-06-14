import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function MainSection() {
  return (
    <section
      className="h-max w-full lg:h-screen bg-cover bg-center pt-nav bg-no-repeat"
      style={{ backgroundImage: 'url("main-section-bg.webp")' }}>
      <img src="star.svg" alt="star" className="absolute top-0 left-0 w-215 h-215 z-0" />
      <img src="star_2.svg" alt="star" className="absolute bottom-0 right-0 w-269 h-269 z-0" />

      <div className="pb-0 flex lg:items-center lg:justify-center w-full h-full lg:pb-nav">
        <Container>
          <div className="flex flex-col lg:flex-row gap-[10vw] w-full lg:items-center">
            <div className="flex flex-col max-w-[427px] w-full">
              <h2 className="text-secondary text-4xl uppercase text-[13px] mb-2 pt-6 lg:pt-0">
                VOCÊ, Junto com a gente
              </h2>
              <h1 className="text-white text-6xl font-normal text-[48px] md:text-[64px] max-w-full mb-6">
                Redefinindo <br />
                <strong>o Futuro</strong>
              </h1>
              <p className="text-[18px] opacity-70 font-normal leading-normal">
                Explore o potencial da reciclagem para criar impacto positivo: transformando resíduos em oportunidades
                sustentáveis e econômicas.
              </p>
              <div className="flex flex-row gap-4 mt-8 flex-wrap">
                <Button variant="semiRounded" color="white" className="flex-1 min-w-max">
                  Saiba mais
                </Button>
                <Button variant="outlined" color="primary" className="flex-1 min-w-max">
                  Como reciclar
                </Button>
              </div>
            </div>
            <div className="w-full h-auto flex items-center justify-center relative flex-col">
              <div className="aspect-video rounded-md w-full h-full bg-gray-3 p-2 flex items-center justify-center relative flex-col">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3zAsyYgSaxU"
                  title="Lixo?"
                  className="rounded-md bg-gray-3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
              </div>
              <div className="mt-4 mb-10 flex items-center gap-2 lg:absolute lg:-bottom-10 lg:mt-0 lg:mb-0">
                <Icon icon="bi:play-circle" className="w-6 h-6 text-white" />
                <p className="text-white text-[14px]">
                  <span className="text-primary">Assista ao vídeo</span> explicativo sobre a separação do lixo
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
