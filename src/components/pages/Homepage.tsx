import { useState, useEffect } from 'react';
import { Meal } from '../../types';
import { fetchData } from '../../utils';
import { RootLayout } from '../templates/RootLayout';

import { RandomMeal } from '../organisms/RandomMeal';

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
				<RandomMeal meal={meal} handleClick={handleRandomMealClick} />
			</RootLayout>
		</>
	);
}

export default Homepage;
