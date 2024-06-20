interface Props {
	name: string;
	description: string;
}

export default function TrashInfo({ name, description }: Props) {
	return (
		<div className="relative w-fit text-justify max-w-[30ch]">
			<div className="w-fit mb-2 bg-[#EEEEEE] rounded">
				<button className="absolute top-3 right-3" type="button">
					<img src="info-icon.svg" alt="info" />
				</button>

				<img src="water-bottle.png" alt="water bottle" />
			</div>

			<h3 className="uppercase text-[#A6B74E] tracking-wide">{name}</h3>
			<small className="text-black">{description}</small>
		</div>
	)
}
