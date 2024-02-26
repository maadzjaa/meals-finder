import { CategoriesLinkList } from '../organisms/CategoriesLinkList';
import { Link } from 'react-router-dom';

export function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<main>
			<Link to='/'>
				<h1 className='header'>Meals finder</h1>
			</Link>
			<CategoriesLinkList />
			{children}
		</main>
	);
}
