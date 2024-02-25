import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage.tsx';
import { CategoriesPage } from './components/pages/CategoriesPage.tsx';
import { SingleMealPage } from './components/pages/SingleMealPage.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='categories/:category' element={<CategoriesPage />} />
				<Route path='/:id' element={<SingleMealPage />}/>
			</Routes>
		</Router>
	</React.StrictMode>
);
