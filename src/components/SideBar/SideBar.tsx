import React from 'react';
import { Icons, List, ListItem } from '@adcimon/react-components';
import { ContentViewType, AppStateType } from '../../AppState';

interface ISideBarProps {
	appState: AppStateType;
	setAppState: (state: AppStateType) => void;
}

export class SideBar extends React.Component<ISideBarProps> {
	private handleClickListItem = (index: number): void => {
		switch (index) {
			case 0:
				this.props.setAppState({ ...this.props.appState, contentView: ContentViewType.Cards });
				break;
			case 1:
				this.props.setAppState({ ...this.props.appState, contentView: ContentViewType.Modals });
				break;
			case 2:
				this.props.setAppState({ ...this.props.appState, contentView: ContentViewType.Tables });
				break;
			case 3:
				this.props.setAppState({ ...this.props.appState, contentView: ContentViewType.Icons });
				break;
		}
	};

	public render = () => {
		return (
			<>
				<div className='flex sm:static fixed h-screen bg-base-900'>
					<aside className='flex-shrink-0 w-64 overflow-y-auto bg-base-800'>
						<div className='text-base-400'>
							<div className='flex items-center justify-center h-16 text-lg font-bold text-base-200'>
								Side Bar
							</div>
							<List>
								<ListItem
									icon={<Icons.Square2StackSolid />}
									label='Cards'
									selected={this.props.appState.contentView === ContentViewType.Cards}
									onClick={() => this.handleClickListItem(0)}
								/>
								<ListItem
									icon={<Icons.RectangleStackSolid />}
									label='Modals'
									selected={this.props.appState.contentView === ContentViewType.Modals}
									onClick={() => this.handleClickListItem(1)}
								/>
								<ListItem
									icon={<Icons.TableCellsSolid />}
									label='Tables'
									selected={this.props.appState.contentView === ContentViewType.Tables}
									onClick={() => this.handleClickListItem(2)}
								/>
								<ListItem
									icon={<Icons.FaceSmileSolid />}
									label='Icons'
									selected={this.props.appState.contentView === ContentViewType.Icons}
									onClick={() => this.handleClickListItem(3)}
								/>
							</List>
						</div>
					</aside>
				</div>
			</>
		);
	};
}
