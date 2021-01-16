import { useEffect, useState } from 'react';

import './Div2.css';
import Div3 from './Div3';

const Div2 = () => {
	const [borderRight2, setBorderRight2] = useState('line-2-s');
	const [visible3, setVisible3] = useState(false);

	const startDiv2 = () => {
		setTimeout(() => {
			setBorderRight2('line-2-e');
			setVisible3(true);
		}, 3500);
	};

	useEffect(() => {
		startDiv2();
	}, []);

	return (
		<>
			<div className="flex text-white">
				<span>{`>`}</span>
				<div
					className={`pl-2 text-yellow-300 line-2 anim-typewriter-2 ${borderRight2}`}
				>
					<span>login </span>
					<span className="text-yellow-100">{`momoware.com`}</span>
				</div>
			</div>
			{visible3 ? <Div3 /> : null}
		</>
	);
};

export default Div2;
