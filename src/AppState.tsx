import { atom } from 'recoil';

export enum AppViewType
{
	SignIn,
	SignUp,
	RecoverPassword,
	Main
}

export enum ContentViewType
{
	Cards,
	Modals,
	Tables,
	Icons
}

export type AppStateType =
{
	appView: AppViewType;
	sidebarVisible: boolean;
	contentView: ContentViewType;
};

export const AppState = atom<AppStateType>(
{
    key: 'AppState',
    default:
    {
		appView: AppViewType.SignIn,
		sidebarVisible: true,
		contentView: ContentViewType.Cards
    }
});
