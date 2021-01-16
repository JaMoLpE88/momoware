import { useEffect, useState } from 'react';

import './Div6.css';
import Div7 from './Div7';

const Div6 = () => {
	const [visible7, setVisible7] = useState(false);
	const [borderRight6, setBorderRight6] = useState('line-6-s');

	const startDiv6 = () => {
		setTimeout(() => {
			setBorderRight6('line-6-e');
			setVisible7(true);
		}, 2500);
	};

	useEffect(() => {
		startDiv6();
	}, []);

	return (
		<>
			<div className="flex text-white">
				<span>{`> Contraseña:`}</span>
				<div
					className={`pl-2 text-yellow-300 line-6 anim-typewriter-6 ${borderRight6}`}
				>
					<span>**********</span>
				</div>
			</div>
			{visible7 ? <Div7 /> : null}
		</>
	);
};

export default Div6;
