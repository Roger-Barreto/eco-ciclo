import Container from '../components/Container';

export default function StatisticsSection() {
	return (
		<section
			id="statistics-section"
			className="h-max w-full lg:h-screen bg-cover bg-center lg:pt-nav bg-no-repeat relative">
			<div className="pb-14 flex lg:items-center lg:justify-center w-full h-full lg:pb-nav">
				<Container clasName="lg:flex lg:flex-col lg:items-center pt-10 overflow-x-overlay">
					<div className="block lg:hidden pb-6 w-full">
						<h2 className="text-white text-4xl text-left w-full font-normal font-poppins ">Estatísticas</h2>
						<h2 className="text-white text-4xl font-bold w-full text-right font-poppins ">Alarmantes</h2>
					</div>
					<div className="w-full md:max-w-[35vw] h-auto relative mx-auto ">
						<img src="circle-1.svg" alt="star" className="absolute bottom-0 left-0 w-[30%] h-auto z-0" />
						<img src="circle-2.svg" alt="star" className="absolute top-0 -right-7 lg:-right-12  w-[40%] h-auto z-0" />
						<div className="max-w-[100vw] z-0 w-[150%] h-[150%] bg-teal-500 bg-opacity-20 rounded-full blur-[240px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
						<img src="planet.png" alt="planet" className="relative w-full h-full z-10" />
						<h2 className="text-white text-[3vw] font-normal font-poppins absolute -top-[24px] -left-[25%] hidden lg:block">
							Estatísticas
						</h2>
						<h2 className="text-white text-[3vw] font-bold font-poppins absolute -top-[24px] -right-[25%] hidden lg:block">
							Alarmantes
						</h2>
					</div>
					<div className="w-full flex flex-col align-baseline justify-start mt-6 gap-6 lg:flex-row lg:justify-between lg:-mt-16">
						<div className="lg:max-w-[500px]">
							<p className="font-light text-lg ">A reciclagem de</p>
							<p className="text-stroke-secondary text-stroke-1 text-transparent text-6xl font-bold">1000kg</p>
							<p className="text-light text-lg font-light">
								de papel pode economizar cerca de <strong>17 árvores</strong>, <strong>7.000 galões de água</strong> e{' '}
								<strong>4.100 quilowatts-hora de energia</strong>.
							</p>
						</div>
						<div className="lg:max-w-[500px] text-right">
							<p className="font-light text-lg ">Estima-se que até</p>
							<p className="text-stroke-primary text-stroke-1 text-transparent text-6xl font-bold">2050</p>
							<p className="text-light text-lg font-light">
								haverá <strong>mais plástico do que peixes</strong> nos oceanos, resultando em{' '}
								<strong>graves consequências</strong> para a <strong>vida marinha</strong>.
							</p>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
}
