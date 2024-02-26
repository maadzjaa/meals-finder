import { useState, useEffect } from 'react';
import { Meal } from '../../types';
import { fetchData } from '../../utils';
import { RootLayout } from '../templates/RootLayout';
import { Link } from 'react-router-dom';

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
				<div className='wrapper'>
					{meal ? (
						<Link to={`/meals/${meal.idMeal}`}>
							<div>
								<h2>{meal.strMeal}</h2>
								<img className='meal-img' src={meal.strMealThumb} alt={meal.strMeal} />
								<p className='meal-description'>{meal.strInstructions}</p>
							</div>
						</Link>
					) : (
						<p>Loading...</p>
					)}
				</div>
				<button className='btn-find' onClick={handleRandomMealClick}>
					Find different meal
				</button>
			</RootLayout>
		</>
	);
}

export default Homepage;
