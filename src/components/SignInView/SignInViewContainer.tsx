import { useRecoilState } from 'recoil';
import { SignInView } from './SignInView';
import { AppState } from '../../AppState';

export const SignInViewContainer = (props: any = {}) => {
	const [appState, setAppState] = useRecoilState(AppState);

	return (
		<SignInView
			{...props}
			appState={appState}
			setAppState={setAppState}
		/>
	);
};
