import { useParams } from 'react-router-dom';
import { fetchData } from '../../utils';
import { useEffect, useState } from 'react';
import { Meal } from '../../types';
import { RootLayout } from '../templates/RootLayout';
import { CategoriesMealList } from '../organisms/CategoriesMealList/CategoriesMealList';

const mealFromCategoryUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export function CategoriesPage() {
	const { category } = useParams();
	const [categoryMeals, setCategoryMeals] = useState<Meal[]>([]);

	useEffect(() => {
		const fetchCategoryMeal = async () => {
			const data = await fetchData(`${mealFromCategoryUrl}${category}`);
			const categoryMealsData = data.meals;
			setCategoryMeals(categoryMealsData);
		};
		fetchCategoryMeal();
	}, [category]);

	return (
		<RootLayout>
			<CategoriesMealList categoryMeals={categoryMeals} category={category} />
		</RootLayout>
	);
}
