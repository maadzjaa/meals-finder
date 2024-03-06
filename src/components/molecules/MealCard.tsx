import { Link } from 'react-router-dom';
import { Meal } from '../../types';
import './MealCard.css';

export function MealCard({ meal }: { meal: Meal }) {
	return (
		<article className='meal-wrapper'>
			<Link className='meal-link' to={`/meals/${meal.idMeal}`}>
				<img className='meal-image' src={meal.strMealThumb} alt={meal.strMeal} />
				<h2 className='meal-name'>{meal.strMeal}</h2>
				{meal.strInstructions && <p className='meal-description'>{meal.strInstructions}</p>}
			</Link>
		</article>
	);
}
