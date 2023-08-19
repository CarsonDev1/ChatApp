import React, { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { addDocument, generateKeywords } from '../firebase/services';
import firebase, { auth } from '../firebase/config';

const googleProvider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);
	const handleLogin = async (provider) => {
		const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

		if (additionalUserInfo?.isNewUser) {
			addDocument('users', {
				displayName: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
				uid: user.uid,
				providerId: additionalUserInfo.providerId,
				keywords: generateKeywords(user.displayName?.toLowerCase()),
			});
		}
	};
	if (user?.uid) {
		navigate('/');
		return;
	}
	return (
		<>
			<Typography variant='h5' sx={{ marginBottom: '10px' }}>
				Welcome to Chat App
			</Typography>
			<Button variant='outlined' onClick={() => handleLogin(googleProvider)}>
				Login with Google
			</Button>
		</>
	);
};

export default Login;
