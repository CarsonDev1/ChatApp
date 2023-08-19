import React, { useState } from 'react';
import { db } from '../firebase/config';

const useFirestore = (collection, condition) => {
	const [document, setDocument] = useState([]);
	React.useEffect(() => {
		let collectionRef = db.collection(collection).orderBy('createdAt');

		if (condition) {
			if (!condition.compareValue || !condition.compareValue.length) {
				return;
			}
			collectionRef = collectionRef.where(condition.fieldName, condition.operator, condition.compareValue);
		}
		const unsubscribe = collectionRef.onSnapshot((snapshot) => {
			const document = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setDocument(document);
		});
		return unsubscribe;
	}, [collection, condition]);
	return document;
};

export default useFirestore;
