import { useState } from 'react';
import Div0 from './Div0';
import Power from './Power';
import './Start.css';

const Start = () => {
	const [start, setStart] = useState(true);
	const [outClass, setOutClass] = useState('');
	const [inClass, setInClass] = useState('');

	const handleClick = () => {
		setTimeout(() => {
			setOutClass('animate__animated animate__zoomOut');
			setTimeout(() => {
				setStart(false);
				setInClass('animate__animated animate__zoomIn');
			}, 1000);
		}, 1000);
	};

	return (
		<>
			{start ? (
				<div className={outClass}>
					<Power handleClick={handleClick} outClass={outClass} />
				</div>
			) : (
				<div className={inClass}>
					<Div0 />
				</div>
			)}
		</>
	);
};

export default Start;
