import { Link, Outlet } from 'react-router-dom';
import logo from './../assets/react.svg';
import { routes } from './../lib/routes.tsx';

export default function Layout() {
	return (
		<>
			<header>
				<nav className="bg-primary">
					<div className="container mx-auto px-6 py-3 flex justify-between items-center">
						<div className='logo-comapany-name flex'>
							<img src={logo} className="w-8 h-8" alt="Logo" />
							<h1 className="text-2xl text-white">Landing Company</h1>
						</div>
						<ul className="flex items-center space-x-4">
							{routes.map(({ path, label }) => (
								<li key={path}>
									<Link to={path} className="text-white hover:underline">
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}
