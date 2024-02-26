import { Link } from 'react-router-dom';
import { Meal } from '../../types';

export function MealCard({ meal }: { meal: Meal }) {
	return (
		<div className='wrapper'>
			<Link to={`/meals/${meal.idMeal}`}>
				<div>
					<h2>{meal.strMeal}</h2>
					<img className='meal-img' src={meal.strMealThumb} alt={meal.strMeal} />
					{meal.strInstructions && <p className='meal-description'>{meal.strInstructions}</p>}
				</div>
			</Link>
		</div>
	);
}
