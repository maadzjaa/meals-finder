/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meal } from '../../types';

export function SingleMeal({ meal }: { meal: Meal | null }) {
	const ingredientsArray = [];

	for (let i = 1; i <= 20; i++) {
		if (!meal) {
			return;
		}

		const ingredient = (meal as any)[`strIngredient${i}`];
		const measure = (meal as any)[`strMeasure${i}`];
		if (ingredient && measure) {
			ingredientsArray.push({ measure, ingredient });
		}
	}

	return (
		<div className='single-meal-wrapper'>
			{meal ? (
				<>
					<h2>Meal name: {meal.strMeal}</h2>
					<img className='single-meal-img' src={meal.strMealThumb} alt={meal.strMeal} />
					<h3 className='single-meal-ingredients'>Ingredients:</h3>

					{ingredientsArray.map((ingredient) => {
						return (
							<p>
								<span>{ingredient.measure}</span>
								<span>{ingredient.ingredient}</span>
							</p>
						);
					})}
					<iframe width='560' height='315' src='https://www.youtube.com/embed/UIcuiU1kV8I' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
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
