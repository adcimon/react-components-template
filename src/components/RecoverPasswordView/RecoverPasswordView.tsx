import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { SignView } from '@adcimon/react-components';
import { Icons, Button, TextInput, Link } from '@adcimon/react-components';
import { AppViewType, AppStateType } from '../../AppState';
import '../../styles/FadeAnimation.css';
import image from '../../assets/images/earth_computer.jpg';

interface IRecoverPasswordViewProps {
	appState: AppStateType;
	setAppState: (state: AppStateType) => void;
}

interface IRecoverPasswordViewState {
	visible: boolean;
}

export class RecoverPasswordView extends React.Component<IRecoverPasswordViewProps, IRecoverPasswordViewState> {
	constructor(props: IRecoverPasswordViewProps) {
		super(props);
		this.state = { visible: false };
	}

	componentDidMount(): void {
		this.setState({ visible: true });
	}

	private handleClickSignIn = () => {
		this.setState({ visible: false });
	};

	private handleExited = () => {
		this.props.setAppState({ ...this.props.appState, appView: AppViewType.SignIn });
	};

	public render = () => {
		return (
			<>
				<CSSTransition
					in={this.state.visible}
					timeout={500}
					classNames='fade'
					onExited={() => this.handleExited()}>
					<SignView source={image}>
						<TextInput
							label='Email'
							icon={<Icons.EnvelopeOutline />}
							tip=''
							className='w-full'
						/>
						<Button
							label='Recover password'
							className='w-full mt-4'
						/>
						<p className='mt-4'>
							<Link
								label={'Back to Sign In'}
								ref='#'
								onClick={this.handleClickSignIn}
							/>
						</p>
					</SignView>
				</CSSTransition>
			</>
		);
	};
}
