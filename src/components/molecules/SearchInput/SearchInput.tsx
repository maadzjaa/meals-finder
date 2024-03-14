import { Link } from 'react-router-dom';
import './SearchInput.css';
import { ChangeEvent } from 'react';

interface SearchInputProps {
	searchValue: string;
	onSearchChange: (value: string) => void;
	onSearchClick: () => void;
}

export function SearchInput({ searchValue, onSearchChange, onSearchClick }: SearchInputProps) {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		onSearchChange(e.target.value);
	};

	return (
		<div className='search-input-wrapper'>
			<input className='search-input' type='text' value={searchValue} onChange={handleInputChange} />
			<Link to={`/search?query=${searchValue} `} className='search-link' onClick={onSearchClick}>
				Find a meal
			</Link>
		</div>
	);
}
