import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../contexts/auth';

import AuthLayout from '../layouts/AuthLayout';
import AppLayout from '../layouts/AppLayout';

const Routes: React.FC = () => {

	const { signed } = useAuth();

	return (
		<NavigationContainer>
			{signed ? <AppLayout /> : <AuthLayout />}
		</NavigationContainer>
	);
}

export default Routes;