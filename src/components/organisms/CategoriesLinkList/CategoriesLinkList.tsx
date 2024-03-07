import { Link } from 'react-router-dom';
import './CategoriesLinkList.css';

export function CategoriesLinkList() {
	const categories = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian'];

	return (
		<ul className='category-link-list'>
			{categories &&
				categories.map((category) => {
					return (
						<li key={category}>
							<Link className='category-link-list-link' to={`/categories/${category.toLowerCase()}`}>
								{category}
							</Link>
						</li>
					);
				})}
		</ul>
	);
}
