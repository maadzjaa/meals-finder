import { Meal } from '../../../types';
import { MealCard } from '../../molecules/MealCard/MealCard';
import './SearchedMeals.css';

export function SearchedMeals({ meals }: { meals: Meal[] | null }) {
	return (
		<>
			<div className='searched-meals-wrapper'>
				{meals?.map((meal) => {
					return <MealCard meal={meal} />;
				})}
			</div>

			{meals === null && <p className='searched-meal-p'>We didn't find any meal. Try again! :) </p>}
		</>
	);
}
