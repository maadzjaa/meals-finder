import { useState, useEffect } from 'react';
import { Meal } from '../../types';
import { fetchData } from '../../utils';
import { RootLayout } from '../templates/RootLayout';
import { MealCard } from '../molecules/MealCard';
import { Button } from '../atoms/Button';

const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

function Homepage() {
	const [meal, setMeal] = useState<Meal | null>(null);

	useEffect(() => {
		const fetchRandomMeal = async () => {
			const data = await fetchData(randomMealUrl);
			const randomMeal = data.meals[0];
			setMeal(randomMeal);
		};

		fetchRandomMeal();
	}, []);

	async function handleRandomMealClick() {
		const data = await fetchData(randomMealUrl);
		const randomMeal = data.meals[0];
		setMeal(randomMeal);
	}

	return (
		<>
			<RootLayout>
				<h2 className='header'>Meal of the day</h2>
				{meal ? <MealCard meal={meal} /> : <p>Loading...</p>}
				<Button handleClick={handleRandomMealClick}>Find different meal</Button>
			</RootLayout>
		</>
	);
}

export default Homepage;
