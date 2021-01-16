import { useEffect, useState } from 'react';
import './Div5.css';
import Div6 from './Div6';

const Div5 = () => {
	const [visible5_1, setVisible5_1] = useState('invisible');
	const [borderRight5, setBorderRight5] = useState('line-5-s');
	const [visible6, setVisible6] = useState(false);

	const startDiv5 = () => {
		setTimeout(() => {
			setBorderRight5('line-5-e');
			setVisible5_1('visible');
			setVisible6(true);
		}, 3000);
	};

	useEffect(() => {
		startDiv5();
	}, []);

	return (
		<>
			<div className="flex text-white">
				<span>Autenticando</span>
				<div className={`line-5 anim-typewriter-5 ${borderRight5}`}>
					...
				</div>
				<div
					className={`${visible5_1} ml-5 bg-red-500 text-white border border-white px-1`}
				>
					Error
				</div>
			</div>
			{visible6 ? <Div6 /> : null}
		</>
	);
};

export default Div5;
