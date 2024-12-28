import Home from './../pages/Home.tsx';
import About from './../pages/About.tsx';

export const routes = [
	{
		path: '/',
		label: 'Home',
		element: <Home />,
	},
	{
		path: '/about',
		label: 'About',
		element: <About />,
	},
	{
		path: '/contact',
		label: 'Contact',
		element: <div>Contact Page</div>, // Replace with actual Contact component later
},
];
