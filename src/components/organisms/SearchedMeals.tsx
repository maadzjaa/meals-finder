import { Meal } from '../../types';
import { MealCard } from '../molecules/MealCard';

export function SearchedMeals({ meals }: { meals: Meal[] | null }) {
	return (
		<>
			{meals?.map((meal) => {
				return <MealCard meal={meal} />;
			})}

			{meals === null && <p>We didn't find any meal. Try again! :) </p>}
		</>
	);
}
