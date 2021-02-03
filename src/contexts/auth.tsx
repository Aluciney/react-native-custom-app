import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { TOKEN_KEY } from '../../env.json';

interface AuthContextProps {
	signed: boolean;
	token: string | null;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		async function loadStorageData() {
			const storagedToken = await AsyncStorage.getItem(TOKEN_KEY);
			if (storagedToken) {
				setToken(storagedToken);
			}
		}
		loadStorageData();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				signed: !!token,
				token,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}