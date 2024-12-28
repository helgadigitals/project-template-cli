import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import { routes } from './lib/routes.tsx'; // Import the route configuration

// Create the router dynamically
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: routes.map(({ path, element }) => ({ path: path === '/' ? '' : path.slice(1), element })),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
