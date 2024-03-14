import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage.tsx';
import { CategoriesPage } from './components/pages/CategoriesPage.tsx';
import { SingleMealPage } from './components/pages/SingleMealPage.tsx';
import './index.css';
import { SearchedMealsPage } from './components/pages/SearchedMealsPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/categories/:category' element={<CategoriesPage />} />
				<Route path='/meals/:id' element={<SingleMealPage />} />
				<Route path='/search' element={<SearchedMealsPage />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
