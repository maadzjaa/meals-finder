import { MealCard } from '../../molecules/MealCard/MealCard';
import { Button } from '../../atoms/Button/Button';
import { Meal, ClickHandler } from '../../../types';
import './RandomMeal.css';

export function RandomMeal({ meal, handleClick }: { meal: Meal | null; handleClick: ClickHandler }) {
	return (
		<article className='random-meal-wrapper'>
			<h2 className='random-meal-header'>Meal of the day</h2>
			{meal ? <MealCard meal={meal} /> : <p>Loading...</p>}
			<Button handleClick={handleClick}>Find different meal</Button>
		</article>
	);
}
