import { useRecoilState } from 'recoil';
import { TopBar } from './TopBar';
import { AppState } from '../../AppState';

export const TopBarContainer = (props: any = {}) => {
	const [appState, setAppState] = useRecoilState(AppState);

	return (
		<TopBar
			{...props}
			appState={appState}
			setAppState={setAppState}
		/>
	);
};
