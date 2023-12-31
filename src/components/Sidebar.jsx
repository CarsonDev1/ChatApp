import React from 'react';
import { Row, Col } from 'antd';
import UserInfo from './UserInfo';
import RoomList from './RoomList';
import styled from 'styled-components';

const SidebarStyled = styled.div`
	background: #131324;
	color: white;
	height: 100vh;
	padding: 1rem;
`;

export default function Sidebar() {
	return (
		<SidebarStyled>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<UserInfo />
				</Col>
				<Col span={24}>
					<RoomList />
				</Col>
			</Row>
		</SidebarStyled>
	);
}
