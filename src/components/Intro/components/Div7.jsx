import { useEffect, useState } from 'react';
import './Div7.css';
import Div8 from './Div8';

const Div7 = () => {
	const [visible7_1, setVisible7_1] = useState('invisible');
	const [borderRight7, setBorderRight7] = useState('line-5-s');
	const [visible8, setVisible8] = useState(false);

	const startDiv7 = () => {
		setTimeout(() => {
			setBorderRight7('line-5-e');
			setVisible7_1('visible');
			setVisible8(true);
		}, 3000);
	};

	useEffect(() => {
		startDiv7();
	}, []);

	return (
		<>
			<div className="flex text-white">
				<span>Autenticando</span>
				<div className={`line-7 anim-typewriter-7 ${borderRight7}`}>
					...
				</div>
				<div
					className={`${visible7_1} ml-5 bg-green-500 text-white border border-white px-1`}
				>
					Ok
				</div>
			</div>
			{visible8 ? <Div8 /> : null}
		</>
	);
};

export default Div7;
