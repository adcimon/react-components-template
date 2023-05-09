import { useRecoilState } from 'recoil';
import { SideBar } from './SideBar';
import { AppState } from '../../AppState';

export const SideBarContainer = (props: any = {}) =>
{
	const [appState, setAppState] = useRecoilState(AppState);

	return (
		<SideBar
			{...props}
			appState={appState}
			setAppState={setAppState}
		/>
	);
}
