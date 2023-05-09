import React from 'react';
import { Icons, IconButton, ListItem, ProfileMenu } from '@adcimon/react-components';
import { AppStateType } from '../../AppState';

interface ITopBarProps
{
	onSignOut?: () => void;
	appState: AppStateType;
	setAppState: (state: AppStateType) => void;
}

export class TopBar extends React.Component<ITopBarProps>
{
	private random: string = (Math.random() + 1).toString(36).substring(7);

	constructor( props: ITopBarProps )
	{
		super(props);
	}

	private handleClickSidebar = () =>
	{
		this.props.setAppState({ ...this.props.appState, sidebarVisible: !this.props.appState.sidebarVisible });
	}

	private handleClickUser = () =>
	{
	}

	private handleClickSettings = () =>
	{
	}

	private handleClickSignOut = () =>
	{
		if( this.props.onSignOut )
		{
			this.props.onSignOut();
		}
	}

	public render = () =>
	{
		return (
			<>
				<div
					className='flex items-center basis-16 flex-shrink-0 z-10 gap-3 py-4 bg-base-800 shadow-md'>
					<IconButton
						icon={<Icons.Bars3Solid/>}
						onClick={this.handleClickSidebar}
						className='ml-4'/>
					<span
						className='text-lg font-bold text-base-200'>
						Template
					</span>
					<ul
						className='flex items-center flex-shrink-0 ml-auto px-4 gap-3'>
						<ProfileMenu
							label='Menu'
							image={`https://avatars.dicebear.com/api/bottts/${this.random}.svg`}>
							<ListItem
								icon={<Icons.UserSolid/>}
								label='User'
								onClick={this.handleClickUser}/>
							<ListItem
								icon={<Icons.Cog6ToothSolid/>}
								label='Settings'
								onClick={this.handleClickSettings}/>
							<ListItem
								icon={<Icons.ArrowLeftOnRectangleOutline/>}
								label='Sign Out'
								onClick={this.handleClickSignOut}/>
						</ProfileMenu>
					</ul>
				</div>
			</>
		);
	}
}
