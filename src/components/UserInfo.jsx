import { Avatar, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthProvider';
import { auth } from '../firebase/config';

const WrapperStyled = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 12px 16px;
	border-bottom: 1px solid rgba(82, 38, 83);
	border-color: white;

	.username {
		color: white;
		margin-left: 5px;
	}
`;

const UserInfo = () => {
	const {
		user: { displayName, photoURL },
	} = useContext(AuthContext);
	const handleSignOut = () => {
		auth.signOut();
	};
	return (
		<WrapperStyled>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Avatar src={photoURL}>{photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}</Avatar>
				<Typography className='username'>{displayName}</Typography>
			</div>
			<Button variant='outlined' onClick={handleSignOut}>
				Sign Out
			</Button>
		</WrapperStyled>
	);
};

export default UserInfo;
