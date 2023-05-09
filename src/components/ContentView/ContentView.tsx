import React from 'react';
import { CardsView } from '../CardsView/CardsView';
import { ModalsView } from '../ModalsView/ModalsView';
import { TablesView } from '../TablesView/TablesView';
import { IconsView } from '../IconsView/IconsView';
import { ContentViewType, AppStateType } from '../../AppState';

interface IContentViewProps
{
	appState: AppStateType;
	setAppState: (state: AppStateType) => void;
}

export class ContentView extends React.Component<IContentViewProps>
{
	public render = () =>
	{
		return (
			<>
				<div
					className='flex flex-col w-full h-full px-6 pb-32 gap-3 overflow-y-auto'>
					{
						(this.props.appState.contentView === ContentViewType.Cards) &&
						<CardsView/>
					}
					{
						(this.props.appState.contentView === ContentViewType.Modals) &&
						<ModalsView/>
					}
					{
						(this.props.appState.contentView === ContentViewType.Tables) &&
						<TablesView/>
					}
					{
						(this.props.appState.contentView === ContentViewType.Icons) &&
						<IconsView/>
					}
				</div>
			</>
		);
	}
}
