import { PersonAddAltOutlined } from '@mui/icons-material';
import { Avatar, AvatarGroup, Button, InputBase, Tooltip } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const HeaderStyled = styled.div`
	display: flex;
	justify-content: space-between;
	height: 56px;
	padding: 0 16px;
	align-items: center;
	border-bottom: 1px solid rgba(230, 230, 230);

	.header {
		&__info {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		&__title {
			margin: 0;
			font-weight: bold;
		}
		&__description {
			font-size: 12px;
		}
	}
`;
const ButtonGroupStyled = styled.div`
	display: flex;
	align-items: center;
`;
const WrapperStyled = styled.div`
	height: 100vh;
`;

const ContentStyled = styled.div`
	height: calc(100% - 56px);
	display: flex;
	flex-direction: column;
	padding: 11px;
	justify-content: flex-end;
`;
const FormStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2px 2px 2px 0;
	border: 1px solid rgba(230, 230, 230);
	border-radius: 2px;

	.form-item {
		flex: 1;
		margin-bottom: 0;
	}
`;

const MessageListStyled = styled.div`
	max-height: 100%;
	overflow-y: auto;
`;

const ChatWindow = () => {
	return (
		<WrapperStyled>
			<HeaderStyled>
				<div className='header__info'>
					<span className='header__title'>Room 1</span>
					<p className='header__description'>This is room 1</p>
				</div>
				<ButtonGroupStyled>
					<Button startIcon={<PersonAddAltOutlined />}>Add</Button>
					<AvatarGroup max={3}>
						<Tooltip title='A'>
							<Avatar>D</Avatar>
						</Tooltip>
						<Tooltip title='B'>
							<Avatar>B</Avatar>
						</Tooltip>
						<Tooltip title='C'>
							<Avatar>C</Avatar>
						</Tooltip>
						<Tooltip title='D'>
							<Avatar>D</Avatar>
						</Tooltip>
					</AvatarGroup>
				</ButtonGroupStyled>
			</HeaderStyled>
			<ContentStyled>
				<MessageListStyled>
					<Message text='Text1' photoUrl={null} displayName='Tinh' createAt={12000} />
					<Message text='Text2' photoUrl={null} displayName='Tinh ne' createAt={12002} />
					<Message text='Text3' photoUrl={null} displayName='Tinh luon' createAt={12030} />
					<Message text='Text4' photoUrl={null} displayName='Tinh day' createAt={12300} />
				</MessageListStyled>
				<FormStyled>
					<InputBase sx={{ ml: 1, flex: 1 }} autoComplete='off' placeholder='Aa' />
					<Button variant='contained'>Send</Button>
				</FormStyled>
			</ContentStyled>
		</WrapperStyled>
	);
};

export default ChatWindow;
