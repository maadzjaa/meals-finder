import { useState, useEffect } from 'react';
import { Meal } from '../../types';
import { fetchData } from '../../utils';
import { RootLayout } from '../templates/RootLayout';
import { SearchInput } from '../molecules/SearchInput/SearchInput';

import { RandomMeal } from '../organisms/RandomMeal/RandomMeal';
import { SearchedMeals } from '../organisms/SearchedMeal/SearchedMeals';

const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
const searchMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function Homepage() {
	const [meal, setMeal] = useState<Meal | null>(null);
	const [search, setSearch] = useState<string>('');
	const [searchedMeals, setSearchedMeals] = useState<Meal[] | null>([]);

	useEffect(() => {
		const fetchRandomMeal = async () => {
			const data = await fetchData(randomMealUrl);
			const randomMeal = data.meals[0];
			setMeal(randomMeal);
		};

		fetchRandomMeal();
	}, []);

	const fetchSearchedMeals = async () => {
		const data = await fetchData(`${searchMealUrl}${search}`);
		setSearchedMeals(data.meals);
	};

	async function handleRandomMealClick() {
		const data = await fetchData(randomMealUrl);
		const randomMeal = data.meals[0];
		setMeal(randomMeal);
	}

	return (
		<>
			<RootLayout>
				<SearchInput searchValue={search} onSearchChange={setSearch} onSearchClick={fetchSearchedMeals} />

				<SearchedMeals meals={searchedMeals} />

				{(searchedMeals === null || searchedMeals.length === 0) && <RandomMeal meal={meal} handleClick={handleRandomMealClick} />}
			</RootLayout>
		</>
	);
}

export default Homepage;
