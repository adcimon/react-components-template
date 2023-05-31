import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { SignView, Icons } from '@adcimon/react-components';
import { Button, TextInput, Link } from '@adcimon/react-components';
import { AppViewType, AppStateType } from '../../AppState';
import '../../styles/FadeAnimation.css';
import image from '../../assets/images/earth_computer.jpg';

interface ISignInViewProps
{
	appState: AppStateType;
	setAppState: (state: AppStateType) => void;
}

interface ISignInViewState
{
	visible: boolean;
	transitionView: AppViewType;
}

export class SignInView extends React.Component<ISignInViewProps, ISignInViewState>
{
	constructor( props: ISignInViewProps )
	{
		super(props);

		this.state =
		{
			visible: false,
			transitionView: AppViewType.SignIn
		};
	}

	componentDidMount(): void
	{
		this.setState({ visible: true });
	}

	private handleClickSignIn = () =>
	{
		this.setState({ visible: false, transitionView: AppViewType.Main });
	}

	private handleClickSignUp = () =>
	{
		this.setState({ visible: false, transitionView: AppViewType.SignUp });
	}

	private handleClickRecoverPassword = () =>
	{
		this.setState({ visible: false, transitionView: AppViewType.RecoverPassword });
	}

	private handleExited = () =>
	{
		this.props.setAppState({ ...this.props.appState, appView: this.state.transitionView });
	}

	public render = () =>
	{
		return (
			<>
				<CSSTransition
					in={this.state.visible}
					timeout={500}
					classNames='fade'
					onExited={() => this.handleExited()}>
					<SignView
						source={image}>
						<h1
							className='mb-4 text-xl font-semibold text-base-200'>
							Template
						</h1>

						<TextInput
							label='Email'
							icon={<Icons.EnvelopeOutline/>}
							className='w-full'/>
						<TextInput
							label='Password'
							icon={<Icons.KeyOutline/>}
							type='password'
							className='w-full mt-2'/>

						<Button
							label='Sign In'
							onClick={this.handleClickSignIn}
							className='w-full mt-4'/>

						<hr className='my-8'/>

						<Button
							label='Create an account'
							onClick={this.handleClickSignUp}
							className='w-full mt-4'/>

						<p
							className='mt-4'>
							<Link
								label={'Forgot your password?'}
								ref='#'
								onClick={this.handleClickRecoverPassword}/>
						</p>
					</SignView>
				</CSSTransition>
			</>
		);
	}
}
