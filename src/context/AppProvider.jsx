import React, { createContext, useContext, useMemo } from 'react';
import { AuthContext } from './AuthProvider';
import useFirestore from '../hooks/useFirestore';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
	const {
		user: { uid },
	} = useContext(AuthContext);
	const roomsCondition = useMemo(() => {
		return {
			fieldName: 'members',
			operator: 'array-contains',
			compareValue: uid,
		};
	}, [uid]);
	const rooms = useFirestore('rooms', roomsCondition);
	return <AppContext.Provider value={{ rooms }}>{children}</AppContext.Provider>;
};

export default AppProvider;
