import { useEffect, useState } from 'react';

import './Div4.css';
import Div5 from './Div5';

const Div4 = () => {
	const [visible5, setVisible5] = useState(false);
	const [borderRight4, setBorderRight4] = useState('line-4-s');

	const startDiv4 = () => {
		setTimeout(() => {
			setBorderRight4('line-4-e');
			setVisible5(true);
		}, 2500);
	};

	useEffect(() => {
		startDiv4();
	}, []);

	return (
		<>
			<div className="flex text-white">
				<span>{`> Contraseña:`}</span>
				<div
					className={`pl-2 text-yellow-300 line-4 anim-typewriter-4 ${borderRight4}`}
				>
					<span>**********</span>
				</div>
			</div>
			{visible5 ? <Div5 /> : null}
		</>
	);
};

export default Div4;
