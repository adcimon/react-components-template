import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { SignView, Icons, Button, TextInput, Selector, Checkbox, Link } from '@adcimon/react-components';
import { AppViewType, AppStateType } from '../../AppState';
import '../../styles/FadeAnimation.css';
import image from '../../assets/images/earth_computer.jpg';

interface ISignUpViewProps
{
	appState: AppStateType;
	setAppState: (state: AppStateType) => void;
}

interface ISignUpViewState
{
	visible: boolean;
}

export class SignUpView extends React.Component<ISignUpViewProps, ISignUpViewState>
{
	constructor( props: ISignUpViewProps )
	{
		super(props);
		this.state = { visible: false };
	}

	componentDidMount(): void
	{
		this.setState({ visible: true });
	}

	private handleClickSignIn = () =>
	{
		this.setState({ visible: false });
	}

	private handleExited = () =>
	{
		this.props.setAppState({ ...this.props.appState, appView: AppViewType.SignIn });
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
							Create account
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
						<TextInput
							label='Confirm Password'
							icon={<Icons.KeyOutline/>}
							type='password'
							className='w-full mt-2'/>
						<Selector
							label='Element'
							className='w-full'>
							<option>Storm</option>
							<option>Earth</option>
							<option>Fire</option>
						</Selector>

						<Checkbox
							label={<>I agree to the <span className='underline'>privacy policy</span></>}
							className='mt-4'/>

						<Button
							label='Create account'
							className='w-full mt-4'/>

						<p
							className='mt-4'>
							<Link
								label={'Already have an account? Sign In'}
								ref='#'
								onClick={this.handleClickSignIn}/>
						</p>
					</SignView>
				</CSSTransition>
			</>
		);
	}
}
