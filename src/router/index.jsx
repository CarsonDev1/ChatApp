import { Outlet, createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import AuthProvider from '../context/AuthProvider';
import ProtectedRoute from './ProtectedRoute';
import AppProvider from '../context/AppProvider';

const AuthLayout = () => {
	return (
		<AuthProvider>
			<AppProvider>
				<Outlet />
			</AppProvider>
		</AuthProvider>
	);
};

export default createBrowserRouter([
	{
		element: <AuthLayout />,
		children: [
			{
				element: <Login />,
				path: '/login',
			},
			{
				element: <ProtectedRoute />,
				children: [
					{
						element: <Home />,
						path: '/',
					},
				],
			},
			// {
			// 	element: <Home />,
			// 	path: '/',
			// },
		],
	},
]);
