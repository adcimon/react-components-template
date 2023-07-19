import React from 'react';
import { Icons, IconToggle, Card, DataCard, VerticalCard } from '@adcimon/react-components';

interface ICardsViewState {
	starred: boolean;
}

export class CardsView extends React.Component<any, ICardsViewState> {
	constructor(props: any) {
		super(props);
		this.state = { starred: false };
	}

	private handleChangeStar = () => {
		this.setState({ starred: !this.state.starred });
	};

	public render = () => {
		return (
			<>
				<h1 className='my-6 text-3xl font-semibold text-base-200'>
					<IconToggle
						value={this.state.starred}
						iconOn={<Icons.StarSolid style={{ width: '24px', height: '24px' }} />}
						iconOff={<Icons.StarOutline style={{ width: '24px', height: '24px' }} />}
						onChange={this.handleChangeStar}
					/>
					Cards
				</h1>
				<Card title='Card'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Card>
				<div className='flex items-center justify-center flex-wrap gap-3'>
					<DataCard
						title='Users'
						icon={<Icons.UserGroupSolid />}
						scale={true}
						onClick={() => {}}
						className='flex-1'
						iconClassName='text-green-100 bg-green-600'>
						9
					</DataCard>
					<DataCard
						title='Trophies'
						icon={<Icons.TrophySolid />}
						scale={true}
						onClick={() => {}}
						className='flex-1'
						iconClassName='text-yellow-100 bg-yellow-600'>
						11
					</DataCard>
					<DataCard
						title='Rockets'
						icon={<Icons.RocketLaunchSolid />}
						scale={true}
						onClick={() => {}}
						className='flex-1'
						iconClassName='text-red-100 bg-red-600'>
						100
					</DataCard>
				</div>
				<DataCard
					title='Data Cards'
					icon={<Icons.Square2StackSolid />}
					onClick={() => {}}>
					4
				</DataCard>
				<div className='flex flex-wrap items-center justify-center my-5 gap-5'>
					<VerticalCard
						text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
						source='https://picsum.photos/id/2/300/200'
						scale={true}
						onClick={() => {}}
						style={{ width: '300px', height: '400px' }}
					/>
					<VerticalCard
						text='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
						source='https://picsum.photos/id/96/300/200'
						scale={true}
						onClick={() => {}}
						style={{ width: '300px', height: '400px' }}
					/>
					<VerticalCard
						text='Placeholder'
						source='https://placehold.co/300x200'
						style={{ width: '300px', height: '400px' }}
					/>
				</div>
			</>
		);
	};
}
