import { Meal } from '../../types';

export function SingleMeal({ meal }: { meal: Meal | null }) {
	return (
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
	);
}
