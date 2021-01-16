import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Div8.css';

const Div8 = () => {
	const history = useHistory();
	const [borderRight8, setBorderRight8] = useState('line-8-s');

	const startDiv8 = () => {
		setTimeout(() => {
			setBorderRight8('line-8-e');
			history.push('/home');
		}, 3000);
	};

	useEffect(() => {
		startDiv8();
	}, []);

	return (
		<>
			<div className="flex text-white">
				<span>Estableciendo conexión</span>
				<div className={`line-8 anim-typewriter-8 ${borderRight8}`}>
					...
				</div>
			</div>
		</>
	);
};

export default Div8;
