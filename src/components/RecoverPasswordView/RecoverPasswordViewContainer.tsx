import { useRecoilState } from 'recoil';
import { RecoverPasswordView } from './RecoverPasswordView';
import { AppState } from '../../AppState';

export const RecoverPasswordViewContainer = (props: any = {}) => {
	const [appState, setAppState] = useRecoilState(AppState);

	return (
		<RecoverPasswordView
			{...props}
			appState={appState}
			setAppState={setAppState}
		/>
	);
};
