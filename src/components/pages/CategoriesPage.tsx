import { useParams } from 'react-router-dom';
import { fetchData } from '../../utils';
import { useEffect, useState } from 'react';
import { CategoryMeal } from '../../types';

const mealFromCategoryUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export function CategoriesPage() {
	const { category } = useParams();
	const [categoryMeal, setCategoryMeal] = useState<CategoryMeal[] | null>(null);

	useEffect(() => {
		const fetchCategoryMeal = async () => {
			const data = await fetchData(`${mealFromCategoryUrl}${category}`);
			const categoryMealsData = data.meals;
			setCategoryMeal(categoryMealsData);
		};
		fetchCategoryMeal();
	}, [category]);

	return (
		<>
			<h2 className='category-meal-header'>
				All meals from category: <span className='category-meal-header-s'>{category}</span>
			</h2>
			<ul className='category-meal-list'>
				{categoryMeal &&
					categoryMeal.map((category) => {
						return (
							<li>
								<div className='category-meal-wrapper'>
									<img className='meal-img' src={category.strMealThumb} alt='' />
									<h3 className='category-meal-name'>{category.strMeal}</h3>
								</div>
							</li>
						);
					})}
			</ul>
		</>
	);
}
