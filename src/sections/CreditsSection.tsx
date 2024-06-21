import Container from '../components/Container';

export default function CreditsSection(){

    return (
        <section 
            id="credits-section" 
            className="text-white py-8 justify-center items-center">
            <div className="container mx-auto flex flex-wrap justify-between items-start px-4 space-y-4 sm:space-y-0 sm:flex-nowrap gap-4">
                <div className="flex flex-auto align-start sm:max-w-xs w-full sm:w-auto w-full">
                    <img src="logoUnisagrado.svg" alt="Logo Unisagrado" className="mb-4 w-32 h-auto sm:w-48" />
                </div>
                <div className="flex flex-auto items-center items-start sm:max-w-xs w-full sm:w-auto">
                    <img src="apoio.svg" alt="Apoio Coordenadoria de Extensão" className="mb-4 w-32 h-auto sm:w-48" />
                </div>
                <div className="flex flex-col sm:max-w-sm w-full sm:w-1/4 mx-2">
                    <strong>Projeto de Extensão:</strong>
                    <p className="text-[12px] opacity-70 font-normal leading-normal sm:text-left">
                        Fábrica de software: desenvolvimento de websites, aplicativos e jogos
                    </p>
                </div>
                <div className="flex flex-col sm:max-w-sm w-full sm:w-1/4 mx-2">
                    <strong>Colaboradores:</strong>
                    <p className="text-[12px] opacity-70 font-normal leading-normal sm:text-left">
                        Roger Santos Barreto, Rodrigo Maganha Stramantinoli, Felipe Evaristo dos Santos,
                        Lucas Dalavale Fabretti e Rafael Felipe Oliveira Ferrari
                    </p>
                </div>
                <div className="flex flex-col sm:max-w-xs w-full sm:w-1/4 mx-2">
                    <strong>Professor Coordenador:</strong>
                    <p className="text-[12px] opacity-70 font-normal leading-normal text-left">
                        Prof. Dr. Elvio Gilberto da Silva.
                    </p>
                </div>
            </div>

            <div className="container gap-2 flex items-center py-4">
                <img src="logoFooter.svg" alt="Logo Footer"/>
                <hr className="border-b border-gray-400 w-full opacity-20"></hr>
            </div>
            
        </section>
    );
}