export default function MapSection() {
	return (
		<section className="bg-teal-500 bg-opacity-20 bg-cover bg-center bg-no-repeat text-center px-20 py-10">
			<h1 className="text-white text-5xl my-8">Onde <span className="font-extrabold">Reciclar?</span></h1>

			<div className="w-full">
				<iframe className="z-10 rounded w-full" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14763.967504106195!2d-49.05141030168098!3d-22.3161469996027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBauru%20Reciclagem!5e0!3m2!1sen!2sbr!4v1718850815508!5m2!1sen!2sbr" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</section>
	)
}
