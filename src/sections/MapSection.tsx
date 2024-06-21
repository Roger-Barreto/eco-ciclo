import Container from '../components/Container';

export default function MapSection() {
	return (
		<section
			id="where-section"
			className="h-max w-full lg:h-screen bg-cover bg-center lg:pt-nav bg-no-repeat relative overflow-hidden">
			<div className="pb-14 flex lg:items-center lg:justify-center w-full h-full lg:pb-nav">
				<Container clasName="lg:flex lg:flex-col lg:items-center pt-10 overflow-x-overlay">
					<h1 className="text-white text-5xl my-8">
						Onde <span className="font-extrabold">Reciclar?</span>
					</h1>

					<div className="w-full h-[60vh] relative">
						<img src="polygon-1.svg" alt="polygon" className="absolute z-0 -left-16 -top-16" />
						<img src="polygon-2.svg" alt="polygon" className="absolute z-0 -right-16 -bottom-16" />
						<iframe
							className="relative z-10 rounded w-full"
							src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14763.967504106195!2d-49.05141030168098!3d-22.3161469996027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBauru%20Reciclagem!5e0!3m2!1sen!2sbr!4v1718850815508!5m2!1sen!2sbr"
							width="600"
							height="100%"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</Container>
			</div>
		</section>
	);
}
