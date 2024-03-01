import { useState, useEffect } from 'react';
import { Category } from '../../types';
import { fetchData } from '../../utils';
import { Link } from 'react-router-dom';
import './CategoriesLinkList.css';

const categoriesMealUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

export function CategoriesLinkList() {
	const [categories, setCategories] = useState<Category[] | null>(null);

	useEffect(() => {
		const fetchCategories = async () => {
			const data = await fetchData(categoriesMealUrl);
			const mealCategories = data.meals;
			setCategories(mealCategories);
		};
		fetchCategories();
	}, []);

	return (
		<ul className='category-link-list'>
			{categories &&
				categories.map((category) => {
					return (
						<li key={category.strCategory}>
							<Link className='category-link-list-link' to={`/categories/${category.strCategory.toLowerCase()}`}>
								{category.strCategory}
							</Link>
						</li>
					);
				})}
		</ul>
	);
}
