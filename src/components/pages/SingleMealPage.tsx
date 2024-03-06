import { useEffect, useState } from 'react';
import { fetchData } from '../../utils';
import { useParams } from 'react-router-dom';
import { Meal } from '../../types';
import { RootLayout } from '../templates/RootLayout';
import { SingleMeal } from '../organisms/SingleMeal';

const singleMealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export function SingleMealPage() {
	const { id } = useParams();
	const [meal, setMeal] = useState<Meal | null>(null);

	useEffect(() => {
		const fetchMeal = async () => {
			const data = await fetchData(`${singleMealUrl}${id}`);
			const singleMeal = data.meals[0];
			setMeal(singleMeal);
		};
		fetchMeal();
	}, [id]);

	return (
		<RootLayout>
			<SingleMeal meal={meal} />
		</RootLayout>
	);
}
