import { Avatar, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
	margin-bottom: 10px;
	.author {
		margin-left: 5px;
		font-weight: bold;
	}
	.date {
		margin-left: 10px;
		font-size: 11px;
		color: #a7a7a7;
	}
	.content {
		margin-left: 30px;
	}
`;

const Message = ({ text, displayName, createAt, photoUrl }) => {
	return (
		<WrapperStyled>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Avatar src={photoUrl}>T</Avatar>
				<Typography className='author'>{displayName}</Typography>
				<Typography className='date'>{createAt}</Typography>
			</div>
			<div>
				<Typography className='content'>{text}</Typography>
			</div>
		</WrapperStyled>
	);
};

export default Message;
