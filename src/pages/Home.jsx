import { Col, Row } from 'antd';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';

export default function Home() {
	return (
		<div>
			<Row>
				<Col span={6}>
					<Sidebar />
				</Col>
				<Col span={18}>
					<ChatWindow />
				</Col>
			</Row>
		</div>
	);
}
