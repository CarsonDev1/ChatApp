import { ExpandLess, ExpandMore, GroupAddOutlined, MeetingRoomOutlined, StarBorder } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppProvider';

const RoomList = () => {
	const { rooms } = useContext(AppContext);
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<List>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<MeetingRoomOutlined />
				</ListItemIcon>
				<ListItemText primary='List Room' />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout='auto' unmountOnExit>
				<List component='div' disablePadding>
					{rooms.map((room) => (
						<ListItemButton sx={{ pl: 4, display: 'block', marginBottom: '5px' }}>
							<ListItemText primary={room.name} />
						</ListItemButton>
					))}
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<GroupAddOutlined />
						</ListItemIcon>
						<ListItemText primary='Add Room' />
					</ListItemButton>
				</List>
			</Collapse>
		</List>
	);
};

export default RoomList;
