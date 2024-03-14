import { useEffect, useState } from 'react';
import { Meal } from '../../types';
import { fetchData } from '../../utils';
import { useLocation } from 'react-router-dom';
import { SearchedMeals } from '../organisms/SearchedMeal/SearchedMeals';
import { RootLayout } from '../templates/RootLayout';
import '../organisms/SearchedMeal/SearchedMeals.css';

const searchMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export function SearchedMealsPage() {
	const location = useLocation();
	const searchQuery = new URLSearchParams(location.search).get('query');
	const [searchedMeals, setSearchedMeals] = useState<Meal[] | null>([]);

	useEffect(() => {
		const fetchSearchedMeals = async () => {
			const data = await fetchData(`${searchMealUrl}${searchQuery}`);
			setSearchedMeals(data.meals);
		};

		fetchSearchedMeals();
	}, [searchQuery]);

	return (
		<RootLayout>
			<h1 className='searched-meals-page-heading'>Now displaying searched meals for: {searchQuery}</h1>
			<SearchedMeals meals={searchedMeals} />
		</RootLayout>
	);
}
