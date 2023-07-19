import React from 'react';
import { Icons, IconToggle, IconButton } from '@adcimon/react-components';

interface IIconsViewState {
	starred: boolean;
}

export class IconsView extends React.Component<any, IIconsViewState> {
	constructor(props: any) {
		super(props);
		this.state = { starred: false };
	}

	private handleChangeStar = () => {
		this.setState({ starred: !this.state.starred });
	};

	private renderIcon = (icon: JSX.Element, name: string) => {
		return (
			<>
				<div
					className='flex flex-col items-center justify-center'
					style={{ width: '100px', height: '100px' }}>
					<IconButton
						icon={icon}
						disabled={true}
					/>
					<span className='w-full overflow-hidden text-xs text-center text-ellipsis text-base-400'>
						{name}
					</span>
				</div>
			</>
		);
	};

	public render = () => {
		const iconStyle = { width: '40px', height: '40px' };

		const names: string[] = [];
		const icons: JSX.Element[] = [];
		Object.keys(Icons).forEach((key: string, index: number) => {
			const Icon = Icons[key as keyof typeof Icons];
			names.push(key);
			icons.push(<Icon style={iconStyle} />);
		});

		return (
			<>
				<h1 className='my-6 text-3xl font-semibold text-base-200'>
					<IconToggle
						value={this.state.starred}
						iconOn={<Icons.StarSolid style={{ width: '24px', height: '24px' }} />}
						iconOff={<Icons.StarOutline style={{ width: '24px', height: '24px' }} />}
						onChange={this.handleChangeStar}
					/>
					Icons
				</h1>
				<div className='flex flex-wrap items-center justify-center gap-10'>
					{icons.map((icon: JSX.Element, index: number) => this.renderIcon(icon, names[index]))}
				</div>
			</>
		);
	};
}
