export default function HeroVideo() {
	return (
		<div className="relative h-screen w-full overflow-hidden">
			<video
				autoPlay
				muted
				loop
				playsInline
				className="h-full w-full object-cover"
			>
				<source src="/background.mp4" type="video/mp4" />
			</video>

			<div className="absolute inset-0 bg-white/55" />

			<div className="absolute inset-0 flex items-center justify-center"></div>
		</div>
	);
}
