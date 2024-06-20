import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrashInfo from '../components/TrashInfo';

function CustomArrow({ side, ...props }: { side: 'left' | 'right' } & CustomArrowProps) {
	const to = side === 'left' ? 'prev' : 'next'

	const { onClick } = props

	return (
		<button
			aria-label={to}
			onClick={onClick}
			className={`absolute -top-20 ${side === 'left' ? 'right-14' : 'right-0'}`}
			type="button"
		>
			<img src={side === 'left' ? 'arrow-left.svg' : 'arrow-right.svg'} alt="info" />
		</button>
	)
}

export default function TypesTrash() {
	const settings = {
		dots: false,
		infinite: false,
		initialSlide: 0,
		slidesToShow: 3.2,
		slidesToScroll: 1,
		nextArrow: <CustomArrow side="right" />,
		prevArrow: <CustomArrow side="left" />,
	}

	return (
		<section className="bg-white px-20 pt-2 pb-10">
			<h1 className="text-black text-5xl my-8">Tipos <span className="font-extrabold">de Lixo</span></h1>

			<div className="text-white slider-container">
				<Slider className="gap-4" {...settings}>
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
				</Slider>
			</div>
		</section>
	)
}
