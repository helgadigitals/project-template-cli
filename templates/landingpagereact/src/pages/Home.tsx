import { Button } from './../components/ui/button.tsx';
import { services, stats } from './../lib/data.ts';
import { Apple, Figma, Gitlab, Github, ArrowRight } from 'lucide-react';

const Home = () => {
	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<section className="relative h-screen">
				<div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
				<div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
					<h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
						Transform Your Digital Presence
					</h1>
					<p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-12 leading-relaxed">
						Elevate your business with cutting-edge solutions that drive growth and innovation.
					</p>
					<div className="flex gap-4">
						<Button size="lg" variant="secondary" className="text-lg px-8 py-6">
							Get Started
						</Button>
						<Button size="lg" variant="outline" className="text-lg px-8 py-6 text-black hover:text-primary">
							Learn More
						</Button>
					</div>
				</div>
			</section>
			
			{/* Services Section */}
			<section className="py-24 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-4xl font-bold mb-6 text-gray-900">Our Services</h2>
						<p className="text-xl text-gray-600">Comprehensive solutions tailored to your needs</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
								<h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
								<p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
								<Button variant="ghost" className="mt-6 group">
									Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
								</Button>
							</div>
						))}
					</div>
				</div>
			</section>
			
			{/* Stats Section */}
			<section className="py-24 bg-primary text-white">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
						{stats.map((stat, index) => (
							<div key={index} className="p-8 border border-white/20 rounded-xl">
								<div className="text-5xl font-bold mb-4">{stat.number}</div>
								<div className="text-xl text-white/90">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>
			
			{/* Partners Section */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold mb-16 text-gray-900">Trusted By Industry Leaders</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
						<Apple size={20} className="w-full h-16 text-gray-700 hover:text-primary transition-colors" />
						<Figma size={20} className="w-full h-16 text-gray-700 hover:text-primary transition-colors" />
						<Gitlab size={20} className="w-full h-16 text-gray-700 hover:text-primary transition-colors" />
						<Github size={20} className="w-full h-16 text-gray-700 hover:text-primary transition-colors" />
					</div>
				</div>
			</section>
			
			{/* Contact Section */}
			<section className="py-24 bg-gray-50">
				<div className="container mx-auto px-4 text-center">
					<div className="max-w-2xl mx-auto">
						<h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
						<p className="text-xl text-gray-600 mb-8">Transform your business today with our expert solutions</p>
						<Button size="lg" variant="default" className="text-lg px-12 py-6">
							Contact Us <ArrowRight className="ml-2" />
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;