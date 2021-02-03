import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import { AuthProvider } from './contexts/auth';

import Route from './routes';

import { THEME } from './constants';

var theme: 'light' | 'dark' = 'light';

const App: React.FC = () => {
	return (
		<ThemeProvider theme={THEME[theme]}>
			<ActionSheetProvider>
				<AuthProvider>
					<StatusBar barStyle={theme == 'light' ? 'dark-content' : 'light-content'} />
					<Route />
				</AuthProvider>
			</ActionSheetProvider>
		</ThemeProvider>
	);
}

export default App;