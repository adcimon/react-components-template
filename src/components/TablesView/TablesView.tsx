import React from 'react';
import { Icons, IconToggle, Table, Row, Cell, ProfileCard, TagVariant, Tag } from '@adcimon/react-components';

interface ITablesViewState
{
	starred: boolean;
	page: number;
	rowCount: number;
	rowsPerPage: number;
}

export class TablesView extends React.Component<any, ITablesViewState>
{
	constructor( props: any )
	{
		super(props);

		this.state =
		{
			starred: false,
			page: 1,
			rowCount: 9,
			rowsPerPage: 5
		};
	}

	private handleChangeStar = () =>
	{
		this.setState({ starred: !this.state.starred });
	}

	private renderRows = () =>
	{
		const x: number = (this.state.page - 1) * this.state.rowsPerPage;
		const y: number = Math.min(this.state.rowCount, (this.state.page - 1) * this.state.rowsPerPage + this.state.rowsPerPage);

		const robots: JSX.Element[] = [
			<Row>
				<Cell>
					<ProfileCard
						title='WALL-E'
						subtitle='Cleaning Unit'
						source='https://avatars.dicebear.com/api/bottts/wall-e.svg'/>
				</Cell>
				<Cell>
					<Tag
						label='Cleaning'
						variant={TagVariant.Success}/>
				</Cell>
				<Cell
					className='text-sm'>
					06/27/2008
				</Cell>
			</Row>,
			<Row>
				<Cell>
					<ProfileCard
						title='J.A.R.V.I.S.'
						subtitle='Just A Rather Very Intelligent System'
						source='https://avatars.dicebear.com/api/bottts/jarvis.svg'/>
				</Cell>
				<Cell>
					<Tag
						label='Destroyed'
						variant={TagVariant.Danger}/>
				</Cell>
				<Cell
					className='text-sm'>
					04/30/2008
				</Cell>
			</Row>,
			<Row>
				<Cell>
					<ProfileCard
						title='S.A.M.'
						subtitle='Super Automated Machine'
						source='https://avatars.dicebear.com/api/bottts/sam.svg'/>
				</Cell>
				<Cell>
					<Tag
						label='Active'
						variant={TagVariant.Enabled}/>
				</Cell>
				<Cell
					className='text-sm'>
					05/24/1972
				</Cell>
			</Row>,
			<Row>
				<Cell>
					<ProfileCard
						title='Bender'
						subtitle='Bender Bending Rodríguez'
						source='https://avatars.dicebear.com/api/bottts/bender.svg'/>
				</Cell>
				<Cell>
					<Tag
						label='Drunk'
						variant={TagVariant.Warning}/>
				</Cell>
				<Cell
					className='text-sm'>
					03/28/1999
				</Cell>
			</Row>,
			<Row>
				<Cell>
					<ProfileCard
						title='Robby'
						subtitle='The Robot'
						source='https://avatars.dicebear.com/api/bottts/robby.svg'/>
				</Cell>
				<Cell>
					<Tag
						label='Shutdown'
						variant={TagVariant.Disabled}/>
				</Cell>
				<Cell
					className='text-sm'>
					03/03/1956
				</Cell>
			</Row>,
			<Row>
				<Cell>
					<ProfileCard
						title='Optimus Prime'
						subtitle='Cybertronian'
						source='https://avatars.dicebear.com/api/bottts/optimus.svg'/>
				</Cell>
				<Cell>
					<Tag
						label='Active'
						variant={TagVariant.Enabled}/>
				</Cell>
				<Cell
					className='text-sm'>
					09/17/1984
				</Cell>
			</Row>,
			<Row>
				<Cell>
					<ProfileCard
						title='HAL'
						subtitle='Heuristically programmed Algorithmic Computer'
						source='https://avatars.dicebear.com/api/bottts/hal.svg'/>
				</Cell>
				<Cell>
					<Tag
						label='Destroyed'
						variant={TagVariant.Danger}/>
				</Cell>
				<Cell
					className='text-sm'>
					04/02/1968
				</Cell>
			</Row>,
			<Row>
				<Cell>
					<ProfileCard
						title='Terminator'
						subtitle='Terminator'
						source='https://avatars.dicebear.com/api/bottts/terminator.svg'/>
				</Cell>
				<Cell>
					<Tag
						label='Destroyed'
						variant={TagVariant.Danger}/>
				</Cell>
				<Cell
					className='text-sm'>
					08/26/1984
				</Cell>
			</Row>,
			<Row>
				<Cell>
					<ProfileCard
						title='R2-D2'
						subtitle='Astromech Droid'
						source='https://avatars.dicebear.com/api/bottts/r2d2.svg'/>
				</Cell>
				<Cell>
					<Tag
						label='Active'
						variant={TagVariant.Success}/>
				</Cell>
				<Cell
					className='text-sm'>
					05/25/1977
				</Cell>
			</Row>
		];

		return (
			<>
				{robots.slice(x, y)}
			</>
		)
	}

	private handlePageChange = (page: number) =>
	{
		this.setState({ page });
	}

	public render = () =>
	{
		return (
			<>
				<h1
					className='my-6 text-3xl font-semibold text-base-200'>
					<IconToggle
						value={this.state.starred}
						iconOn={<Icons.StarSolid style={{ width: '24px', height: '24px' }}/>}
						iconOff={<Icons.StarOutline style={{ width: '24px', height: '24px' }}/>}
						onChange={this.handleChangeStar}/>
					Tables
				</h1>
				<Table
					page={this.state.page}
					rowCount={this.state.rowCount}
					rowsPerPage={this.state.rowsPerPage}
					onChangePage={this.handlePageChange}
					className='h-96'>
					<Row className='font-bold'>
						<Cell>ROBOT</Cell>
						<Cell>STATUS</Cell>
						<Cell>DATE</Cell>
					</Row>
					{this.renderRows()}
				</Table>
			</>
		);
	}
}
