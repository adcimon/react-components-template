import { useRecoilState } from 'recoil';
import { AppState } from '../../AppState';
import { AppView } from './AppView';

export const AppViewContainer = (props: any = {}) => {
	const [appState, setAppState] = useRecoilState(AppState);

	return (
		<AppView
			{...props}
			appState={appState}
			setAppState={setAppState}
		/>
	);
};
