import { useEffect, useState } from 'react';
import { fetchData } from '../../utils';
import { useParams } from 'react-router-dom';
import { Meal } from '../../types';
import { RootLayout } from '../templates/RootLayout';

const singleMealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export function SingleMealPage() {
	const { id } = useParams();
	const [meal, setMeal] = useState<Meal | null>(null);

	useEffect(() => {
		const fetchMeal = async () => {
			const data = await fetchData(`${singleMealUrl}${id}`);
			const singleMeal = data.meals[0];
			setMeal(singleMeal);
		};
		fetchMeal();
	}, [id]);

	return (
		<RootLayout>
			<div className='single-meal-wrapper'>
				{meal ? (
					<>
						<h2>Meal name: {meal.strMeal}</h2>
						<img className='single-meal-img' src={meal.strMealThumb} alt={meal.strMeal} />
						<h3>Ingredients:</h3>
						<div className='single-meal-description'>
							<p>{meal.strInstructions}</p>
						</div>
					</>
				) : (
					<p>Loading...</p>
				)}
			</div>
		</RootLayout>
	);
}
