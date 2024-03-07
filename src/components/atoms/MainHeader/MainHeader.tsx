import './MainHeader.css';
import { Link } from 'react-router-dom';

export function MainHeader() {
	return (
		<Link className='main-header' to='/'>
			<h1>Meals finder</h1>
		</Link>
	);
}
