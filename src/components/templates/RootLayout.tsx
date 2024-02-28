import { MainHeader } from '../atoms/MainHeader';
import { CategoriesLinkList } from '../organisms/CategoriesLinkList';

export function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<main>
			<MainHeader />
			<CategoriesLinkList />
			{children}
		</main>
	);
}
