import { Outlet, createBrowserRouter, Route } from 'react-router-dom'; // Import Route
import Login from '../pages/Login';
import Home from '../pages/Home';
import AuthProvider from '../context/AuthProvider';
import ProtectedRoute from './ProtectedRoute';
import AppProvider from '../context/AppProvider';
import AddRoom from '../components/AddRoom';
import InviteMember from '../components/InviteMember';

const AuthLayout = () => {
	return (
		<AuthProvider>
			<AppProvider>
				<Outlet />
				<AddRoom />
				<InviteMember />
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
					// {
					// 	element: <Video />,
					// 	path: '/video',
					// },
				],
			},
		],
	},
]);
