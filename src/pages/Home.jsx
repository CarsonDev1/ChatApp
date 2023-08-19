import { Grid } from '@mui/material';
import React from 'react';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';

const Home = () => {
	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<Sidebar />
				</Grid>
				<Grid item xs={9}>
					<ChatWindow />
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
