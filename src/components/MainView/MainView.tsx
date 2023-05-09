import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { TopBarContainer } from '../TopBar/TopBarContainer';
import { SideBarContainer } from '../SideBar/SideBarContainer';
import { ContentViewContainer } from '../ContentView/ContentViewContainer';
import { AppViewType, AppStateType } from '../../AppState';

interface IMainViewProps
{
	appState: AppStateType;
	setAppState: (state: AppStateType) => void;
}

interface IMainViewState
{
	visible: boolean;
}

export class MainView extends React.Component<IMainViewProps, IMainViewState>
{
	constructor( props: IMainViewProps )
	{
		super(props);

		this.state = { visible: false };
	}

	componentDidMount(): void
	{
		this.setState({ visible: true });
	}

	private handleExited = () =>
	{
		this.props.setAppState({ ...this.props.appState, appView: AppViewType.SignIn });
	}

	private handleClickSignOut = () =>
	{
		this.setState({ visible: false });
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
					<div
						className='flex flex-col w-full h-full'>
						<TopBarContainer onSignOut={this.handleClickSignOut}></TopBarContainer>
						<div
							className='flex flex-row w-full h-full'>
							{
								(this.props.appState.sidebarVisible) &&
								<SideBarContainer></SideBarContainer>
							}
							<ContentViewContainer></ContentViewContainer>
						</div>
					</div>
				</CSSTransition>
			</>
		);
	}
}
