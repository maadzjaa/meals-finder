import { ClickHandler } from '../../types';
import './Button.css';

export function Button({ handleClick, children }: { handleClick: ClickHandler; children: React.ReactNode }) {
	return (
		<button className='btn' onClick={handleClick}>
			{children}
		</button>
	);
}
