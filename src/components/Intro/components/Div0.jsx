import { useEffect, useState } from 'react';

import './Div0.css';
import Div1 from './Div1';

const Div0 = () => {
	const [borderRight0, setBorderRight0] = useState('line-0-s');
	const [visible1, setVisible1] = useState(false);

	const startDiv0 = () => {
		setTimeout(() => {
			setBorderRight0('line-0-e');
			setVisible1(true);
		}, 4500);
	};

	useEffect(() => {
		startDiv0();
	}, []);

	return (
		<>
			<div className="flex text-white">
				<span>{`>`}</span>
				<div
					className={`pl-2 text-yellow-300 line-0 anim-typewriter-0 ${borderRight0}`}
				>
					<span>check </span>
					<span className="text-yellow-100">{`momoware.com `}</span>
					<span className="text-gray-300">--status</span>
				</div>
			</div>
			{visible1 ? <Div1 /> : null}
		</>
	);
};

export default Div0;
