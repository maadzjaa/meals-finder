import { MealCard } from '../molecules/MealCard';
import { Meal } from '../../types';
import './CategoriesMealList.css';

export function CategoriesMealList({ categoryMeals, category }: { categoryMeals: Meal[]; category: string | undefined }) {
	return (
		<>
			{category && (
				<h2 className='category-meal-header'>
					All meals from category: <span>{category}</span>
				</h2>
			)}
			<ul className='category-meal-list'>
				{categoryMeals &&
					categoryMeals.map((category) => {
						return (
							<li>
								<MealCard meal={category} />
							</li>
						);
					})}
			</ul>
		</>
	);
}
