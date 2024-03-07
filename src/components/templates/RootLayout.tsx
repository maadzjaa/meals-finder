import { MainHeader } from '../atoms/MainHeader/MainHeader';
import { CategoriesLinkList } from '../organisms/CategoriesLinkList/CategoriesLinkList';

export function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<main>
			<MainHeader />
			<CategoriesLinkList />
			{children}
		</main>
	);
}
