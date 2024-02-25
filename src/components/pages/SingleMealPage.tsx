import { useEffect, useState } from 'react';
import { fetchData } from '../../utils';
import { useParams } from 'react-router-dom';
import { Meal } from '../../types';

const singleMealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export function SingleMealPage() {
	const { id } = useParams();
	const [meal, setMeal] = useState<Meal | null>(null);

	useEffect(() => {
		const fetchMeal = async () => {
			const data = await fetchData(`${singleMealUrl}${id}`);
			const singleMeal = data.meals[0];
			console.log(singleMeal);
			setMeal(singleMeal);
		};
		fetchMeal();
	}, [id]);

	return (
		<>
			<h1>Meal id: {id}</h1>

			<div className='wrapper'>
				{meal ? (
					<div className='single-meal-wrapper'>
						<h2>Meal name: {meal.strMeal}</h2>
						<img className='single-meal-img' src={meal.strMealThumb} alt={meal.strMeal} />
						<p className='single-meal-description'>{meal.strInstructions}</p>
					</div>
				) : (
					<p>Loading...</p>
				)}
			</div>
		</>
	);
}
