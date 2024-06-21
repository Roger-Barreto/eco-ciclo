import Slider, { CustomArrowProps, Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TrashInfo from '../components/TrashInfo';
import Container from '../components/Container';

function CustomArrow({ side, ...props }: { side: 'left' | 'right' } & CustomArrowProps) {
	const to = side === 'left' ? 'prev' : 'next';

	const { onClick } = props;

	return (
		<button
			aria-label={to}
			onClick={onClick}
			className={`z-20 absolute -top-14 max-sm:top-1/2 -translate-y-1/2 ${side === 'left' ? 'right-14 max-sm:left-0' : 'right-0 max-sm:right-6'}`}
			type="button">
			<img src={side === 'left' ? 'arrow-left.svg' : 'arrow-right.svg'} alt="info" />
		</button>
	);
}

export default function TypesTrash() {
	const settings: Settings = {
		dots: false,
		infinite: false,
		initialSlide: 0,
		slidesToShow: 3.5,
		slidesToScroll: 1,
		centerPadding: '60px',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		nextArrow: <CustomArrow side="right" />,
		prevArrow: <CustomArrow side="left" />,
	};

	return (
		<section
			id="trash-types-section"
			className="bg-white h-max w-full lg:h-screen bg-cover bg-center lg:pt-nav bg-no-repeat relative">
			<div className="pb-6 flex lg:items-center lg:justify-center w-full h-full lg:pb-nav">
				<Container>
					<h1 className="text-black t text-6xl font-normal text-[48px] md:text-[64px]  my-8 ">
						Tipos <span className="font-extrabold">de Lixo</span>
					</h1>

					<div className="slider-container pb-6">
						<Slider className="gap-6 pb-6" {...settings}>
							<TrashInfo
								name="Comercial"
								description="Composto essencialmente de embalagens de plásticos, papelões, papéis e restos de alimentos"
							/>
							<TrashInfo
								name="Orgânico"
								description="Proveniente de matéria viva, como por exemplo: restos de alimentos, folhas, caule, sementes, papéis usados, dejetos humanos, dentre outros."
							/>
							<TrashInfo
								name="Hospitalar"
								description="Descartado por hospitais, clínicas de saúde, laboratórios, farmácias, consultórios odontológicos e veterinários. inclui materiais como seringas, gases, fraldas, luvas, agulhas, embalagens, dentre outros."
							/>
							<TrashInfo
								name="Industrial"
								description="Gerado pelo setor secundário, ou seja, as indústrias. Esse tipo de lixo é caracterizado por resíduos como: gases, produtos químicos, óleos, cinzas, metais, vidros, plásticos, tecidos, papéis, borracha, madeira."
							/>
							<TrashInfo
								name="Eletrônico"
								description="Composto pelo descarte dos aparelhos elétricos e eletrônicos como rádios, computadores, televisores, celulares, fios, baterias, carregadores, dentre outros."
							/>
							<TrashInfo
								name="Radioativo"
								description="Esse tipo de lixo é altamente tóxico por conter urânio (e outros metais pesados). Ele é produzido por atividades que envolvam elementos radioativos como indústrias nucleares, serviços de saúde, dentre outros."
							/>
							<TrashInfo
								name="Espacial"
								description="É gerado pelos materiais lançados no espaço como robôs, foguetes, satélites artificiais. A poluição espacial tem sido um dos grandes problemas da modernidade, pois eles podem cair na atmosfera."
							/>
						</Slider>
					</div>
				</Container>
			</div>
		</section>
	);
}
