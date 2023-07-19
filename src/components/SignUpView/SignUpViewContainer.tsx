import { useRecoilState } from 'recoil';
import { SignUpView } from './SignUpView';
import { AppState } from '../../AppState';

export const SignUpViewContainer = (props: any = {}) => {
	const [appState, setAppState] = useRecoilState(AppState);

	return (
		<SignUpView
			{...props}
			appState={appState}
			setAppState={setAppState}
		/>
	);
};
