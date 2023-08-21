import { useContext } from 'react';
import { AppContext } from '../context/AppProvider';
import { AuthContext } from '../context/AuthProvider';
import { Form, Input, Modal } from 'antd';
import { addDocument } from '../firebase/services';

export default function AddRoom() {
	const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
	const {
		user: { uid },
	} = useContext(AuthContext);
	const [form] = Form.useForm();

	const handleOk = () => {
		// handle logic
		// add new room to firestore
		addDocument('rooms', { ...form.getFieldsValue(), members: [uid] });

		// reset form value
		form.resetFields();

		setIsAddRoomVisible(false);
	};

	const handleCancel = () => {
		// reset form value
		form.resetFields();

		setIsAddRoomVisible(false);
	};

	return (
		<div>
			<Modal title='Add Room' visible={isAddRoomVisible} onOk={handleOk} onCancel={handleCancel}>
				<Form form={form} layout='vertical'>
					<Form.Item label='Room Name' name='name'>
						<Input placeholder='Room Name' />
					</Form.Item>
					<Form.Item label='Description' name='description'>
						<Input.TextArea placeholder='Description' />
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
}
