import React from 'react';
import { SignView } from '@adcimon/react-components';
import image from '../../assets/images/404.png';

export class NotFoundView extends React.Component {
	public render = () => {
		return (
			<>
				<SignView source={image}>
					<h1
						className='mb-4 text-xl font-semibold text-base-200'
						style={{ fontSize: '24px' }}>
						The requested page isn't available.
					</h1>
				</SignView>
			</>
		);
	};
}
