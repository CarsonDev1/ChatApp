import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addDocument, generateKeywords } from '../firebase/services';
import firebase, { auth } from '../firebase/config';
import { Button, Col, Row } from 'antd';

const googleProvider = new firebase.auth.GoogleAuthProvider();

const FormContainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #131324;
`;

const Brand = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: center;
	margin-bottom: 20px;

	h1 {
		color: white;
		font-size: 2rem;
		text-transform: uppercase;
		margin: 0;
	}
`;

const LoginForm = styled.form``;

const LoginButton = styled(Button)`
	background-color: #4e0eff;
	color: white;
	border: none;
	font-weight: bold;
	cursor: pointer;
	border-radius: 0.4rem;
	font-size: 1rem;
	text-transform: uppercase;
	&:hover {
		background-color: #4e0eff;
	}
`;
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
		return null;
	}

	return (
		<FormContainer>
			<Row justify='center'>
				<Col>
					<Brand>
						<h1>CHAT APP</h1>
					</Brand>
					<LoginForm>
						<LoginButton onClick={() => handleLogin(googleProvider)}>Login with Google</LoginButton>
					</LoginForm>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default Login;
