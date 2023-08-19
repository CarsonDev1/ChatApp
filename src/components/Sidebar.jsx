import { Grid } from '@mui/material';
import React from 'react';
import UserInfo from './UserInfo';
import RoomList from './RoomList';
import styled from 'styled-components';

const SidebarStyled = styled.div`
	background: #9e978e;
	color: white;
	height: 100vh;
`;

const Sidebar = () => {
	return (
		<SidebarStyled>
			<Grid>
				<Grid item>
					<UserInfo />
				</Grid>
				<Grid item>
					<RoomList />
				</Grid>
			</Grid>
		</SidebarStyled>
	);
};

export default Sidebar;
