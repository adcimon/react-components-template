import { useRecoilState } from 'recoil';
import { MainView } from './MainView';
import { AppState } from '../../AppState';

export const MainViewContainer = (props: any = {}) => {
	const [appState, setAppState] = useRecoilState(AppState);

	return (
		<MainView
			{...props}
			appState={appState}
			setAppState={setAppState}
		/>
	);
};
