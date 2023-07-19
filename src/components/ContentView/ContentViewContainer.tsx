import { useRecoilState } from 'recoil';
import { ContentView } from './ContentView';
import { AppState } from '../../AppState';

export const ContentViewContainer = (props: any = {}) => {
	const [appState, setAppState] = useRecoilState(AppState);

	return (
		<ContentView
			{...props}
			appState={appState}
			setAppState={setAppState}
		/>
	);
};
