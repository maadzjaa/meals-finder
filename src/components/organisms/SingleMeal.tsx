/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meal } from '../../types';
import './SingleMeal.css';

export function SingleMeal({ meal }: { meal: Meal | null }) {
	const ingredientsArray = [];
	const youtubeUrl = meal?.strYoutube ? meal.strYoutube.split('=')[1] : null;

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
					<h2 className='single-meal-name'>Meal name: {meal.strMeal}</h2>
					<img className='single-meal-img' src={meal.strMealThumb} alt={meal.strMeal} />
					<h3 className='single-meal-ingredients'>Ingredients:</h3>

					{ingredientsArray.map((ingredient) => {
						return (
							<p>
								<span className='single-meal-measure'>{ingredient.measure}</span>
								<span className='single-meal-ingredient'>{ingredient.ingredient}</span>
							</p>
						);
					})}
					<div className='single-meal-description'>
						<p>{meal.strInstructions}</p>
					</div>

					{youtubeUrl && (
						<>
							<h3 className='single-meal-youtube-note'>You can watch the recipe video below!</h3>

							<iframe width='560' height='315' src={`https://www.youtube.com/embed/${youtubeUrl}`} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
						</>
					)}

					<h3 className='single-meal-bottom-note'>Enjoy!</h3>
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}
