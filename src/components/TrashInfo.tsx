interface Props {
	name: string;
	description: string;
}

export default function TrashInfo({ name, description }: Props) {
	const getImage = (name: string): string => {
		switch (name) {
			case 'Comercial':
				return 'lixo-comercial.png';
			case 'Orgânico':
				return 'lixo-organico.png';
			case 'Eletrônico':
				return 'lixo-eletronico.png';
			case 'Hospitalar':
				return 'lixo-hospitalar.png';
			case 'Industrial':
				return 'lixo-industrial.png';
			case 'Eletrônico':
				return 'lixo-eletronico.png';
			case 'Radioativo':
				return 'lixo-radioativo.png';
			case 'Espacial':
				return 'lixo-espacial.png';
			default:
				return 'lixo-comercial.png';
		}
	}

	return (
		<div className="relative w-full text-justify pr-6">
			<div className="w-full mb-2 bg-[#EEEEEE] rounded">
				<img src={getImage(name)} alt="water bottle" className="w-full h-auto" />
			</div>

			<h3 className="uppercase text-[#A6B74E] tracking-wide">{name}</h3>
			<small className="text-black text-left">{description}</small>
		</div>
	);
}
