import React from 'react';
import { SignInViewContainer } from '../SignInView/SignInViewContainer';
import { SignUpViewContainer } from '../SignUpView/SignUpViewContainer';
import { RecoverPasswordViewContainer } from '../RecoverPasswordView/RecoverPasswordViewContainer';
import { MainViewContainer } from '../MainView/MainViewContainer';
import { NotFoundView } from '../NotFoundView/NotFoundView';
import { AppViewType, AppStateType } from '../../AppState';
import '@adcimon/react-components/styles/ThemeDark.css';
import '@adcimon/react-components/styles/Font.css';
import './AppView.css';

interface IAppViewProps {
	appState: AppStateType;
	setAppState: (state: AppStateType) => void;
}

export class AppView extends React.Component<IAppViewProps> {
	public render = () => {
		const view = () => {
			switch (this.props.appState.appView) {
				case AppViewType.SignIn:
					return <SignInViewContainer />;
				case AppViewType.SignUp:
					return <SignUpViewContainer />;
				case AppViewType.RecoverPassword:
					return <RecoverPasswordViewContainer />;
				case AppViewType.Main:
					return <MainViewContainer />;
				default:
					return <NotFoundView />;
			}
		};

		return (
			<>
				<div className='flex items-center justify-center h-screen bg-base-900'>{view()}</div>
			</>
		);
	};
}
