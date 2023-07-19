import { RecoilRoot } from 'recoil';
import { AppViewContainer } from './components/AppView/AppViewContainer';

export default function App() {
	return (
		<RecoilRoot>
			<AppViewContainer />
		</RecoilRoot>
	);
}
