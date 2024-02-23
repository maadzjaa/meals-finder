import { useState, useEffect } from 'react';

type Meal = { strMeal: string; strMealThumb: string; strInstructions: string };
type Category = { strCategory: string };
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
const categoriesMealUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

async function fetchData(url: string) {
	const result = await fetch(url);
	const data = await result.json();

	return data;
}

function App() {
	const [meal, setMeal] = useState<Meal | null>(null);
	const [categories, setCategories] = useState<Category[] | null>(null);

	useEffect(() => {
		const fetchRandomMeal = async () => {
			const data = await fetchData(randomMealUrl);
			const randomMeal = data.meals[0];
			setMeal(randomMeal);
		};
		const fetchCategories = async () => {
			const data = await fetchData(categoriesMealUrl);
			const mealCategories = data.meals;
			console.log(mealCategories);
			setCategories(mealCategories);
		};
		fetchRandomMeal();
		fetchCategories();
	}, []);

	async function handleRandomMealClick() {
		const data = await fetchData(randomMealUrl);
		setMeal(data);
	}

	return (
		<>
			<h1 className='header'>Meals finder</h1>
			<ul className='category-list'>
				{categories &&
					categories.map((category) => {
						return <li>{category.strCategory}</li>;
					})}
			</ul>
			<h2 className='header'>Meal of the day</h2>
			<div className='wrapper'>
				{meal ? (
					<div>
						<h2>{meal.strMeal}</h2>
						<img className='meal-img' src={meal.strMealThumb} alt={meal.strMeal} />
						<p className='meal-description'>{meal.strInstructions}</p>
					</div>
				) : (
					<p>Loading...</p>
				)}
			</div>
			<button className='btn-find' onClick={handleRandomMealClick}>
				Find different meal
			</button>
		</>
	);
}

export default App;
