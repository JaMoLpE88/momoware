import { useEffect, useState } from 'react';

import './Div3.css';
import Div4 from './Div4';

const Div3 = () => {
	const [visible4, setVisible4] = useState(false);
	const [borderRight3, setBorderRight3] = useState('line-3-s');

	const startDiv3 = () => {
		setTimeout(() => {
			setBorderRight3('line-3-e');
			setVisible4(true);
		}, 2500);
	};

	useEffect(() => {
		startDiv3();
	}, []);

	return (
		<>
			<div className="flex text-white">
				<span>{`> Usuario:`}</span>
				<div
					className={`pl-2 text-yellow-300 line-3 anim-typewriter-3 ${borderRight3}`}
				>
					<span>momoware</span>
				</div>
			</div>
			{visible4 ? <Div4 /> : null}
		</>
	);
};

export default Div3;
