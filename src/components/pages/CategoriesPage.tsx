import { useParams } from 'react-router-dom';
import { fetchData } from '../../utils';
import { useEffect, useState } from 'react';
import { Meal } from '../../types';
import { RootLayout } from '../templates/RootLayout';
import { MealCard } from '../molecules/MealCard';

const mealFromCategoryUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export function CategoriesPage() {
	const { category } = useParams();
	const [categoryMeal, setCategoryMeal] = useState<Meal[] | null>(null);

	useEffect(() => {
		const fetchCategoryMeal = async () => {
			const data = await fetchData(`${mealFromCategoryUrl}${category}`);
			const categoryMealsData = data.meals;
			setCategoryMeal(categoryMealsData);
		};
		fetchCategoryMeal();
	}, [category]);

	return (
		<RootLayout>
			<h2 className='category-meal-header'>
				All meals from category: <span className='category-meal-header-s'>{category}</span>
			</h2>
			<ul className='category-meal-list'>
				{categoryMeal &&
					categoryMeal.map((category) => {
						return (
							<li className='category-list-item'>
								<MealCard meal={category} />
							</li>
						);
					})}
			</ul>
		</RootLayout>
	);
}
