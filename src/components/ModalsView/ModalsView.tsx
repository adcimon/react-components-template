import React from 'react';
import { Icons, IconToggle, Button, ButtonVariant, DialogModal, InfoModal, SuccessModal, WarningModal, ErrorModal } from '@adcimon/react-components';

enum ModalType
{
	None,
	Dialog,
	Info,
	Success,
	Warning,
	Error
}

interface IModalsViewState
{
	starred: boolean;
	modalType: ModalType;
}

export class ModalsView extends React.Component<any, IModalsViewState>
{
	constructor( props: any )
	{
		super(props);

		this.state =
		{
			starred: false,
			modalType: ModalType.None
		};
	}

	private handleChangeStar = () =>
	{
		this.setState({ starred: !this.state.starred });
	}

	private hideModals = () =>
	{
		this.setState({ modalType: ModalType.None });
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
					Modals
				</h1>
				<div
					className='flex items-center justify-center flex-wrap gap-3'>
					<Button
						label='Dialog Modal'
						variant={ButtonVariant.Success}
						onClick={() => this.setState({ modalType: ModalType.Dialog })}
						style={{ width: '200px' }}/>
					<Button
						label='Info Modal'
						variant={ButtonVariant.Normal}
						onClick={() => this.setState({ modalType: ModalType.Info })}
						style={{ width: '200px' }}/>
					<Button
						label='Success Modal'
						variant={ButtonVariant.Success}
						onClick={() => this.setState({ modalType: ModalType.Success })}
						style={{ width: '200px' }}/>
					<Button
						label='Warning Modal'
						variant={ButtonVariant.Warning}
						onClick={() => this.setState({ modalType: ModalType.Warning })}
						style={{ width: '200px' }}/>
					<Button
						label='Error Modal'
						variant={ButtonVariant.Danger}
						onClick={() => this.setState({ modalType: ModalType.Error })}
						style={{ width: '200px' }}/>
				</div>
				<DialogModal
					visible={this.state.modalType === ModalType.Dialog}
					title='Dialog Modal'
					onAccept={this.hideModals}
					onCancel={this.hideModals}>
					This is a dialog modal.
				</DialogModal>
				<InfoModal
					visible={this.state.modalType === ModalType.Info}
					title='Info Modal'
					onAccept={this.hideModals}>
					This is an info modal.
				</InfoModal>
				<SuccessModal
					visible={this.state.modalType === ModalType.Success}
					title='Success Modal'
					onAccept={this.hideModals}>
					This is a success modal.
				</SuccessModal>
				<WarningModal
					visible={this.state.modalType === ModalType.Warning}
					title='Warning Modal'
					onAccept={this.hideModals}>
					This is a warning modal.
				</WarningModal>
				<ErrorModal
					visible={this.state.modalType === ModalType.Error}
					title='Error Modal'
					onAccept={this.hideModals}>
					This is an error modal.
				</ErrorModal>
			</>
		);
	}
}
