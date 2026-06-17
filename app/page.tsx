import HeroVideo from "@/app/hero";
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Home() {
	return (
		<section className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
			<HeroVideo />

			<div className="absolute flex flex-col items-center justify-center text-center">
				<Image
					src={Logo}
					alt="Logo"
					className="w-52 md:w-64 object-contain"
					priority
				/>

				<h1 className="mt-8 font-display italic text-3xl md:text-6xl text-black">
					Coming soon
				</h1>

				<div className="mt-10 font-body flex flex-col items-center gap-3 text-sm md:text-xl uppercase tracking-wider text-black">
					<a
						href="https://maps.app.goo.gl/ubUEMJHx13Mt7QKF7"
						target="_blank"
						className="hover:text-wine-500 transition-colors"
					>
						Goriška brda, Zali Breg 6, Slovenija
					</a>

					<a
						href="mailto:tonevi.markocic@gmail.com"
						className="hover:text-wine-500 transition-colors"
					>
						tonevi.markocic@gmail.com
					</a>

					<div className="flex flex-col items-center gap-1 md:gap-2">
						<a
							href="tel:+386040683481"
							className="hover:text-wine-500 transition-colors"
						>
							Leon · 040 683 481
						</a>
						<a
							href="tel:+386040723384"
							className="hover:text-wine-500 transition-colors"
						>
							Simon · 040 723 384
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
