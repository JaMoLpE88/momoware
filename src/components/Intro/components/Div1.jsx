import { useEffect, useState } from 'react';
import './Div1.css';
import Div2 from './Div2';

const Div1 = () => {
	const [visible1_1, setVisible1_1] = useState('invisible');
	const [borderRight1, setBorderRight1] = useState('line-1-s');
	const [visible2, setVisible2] = useState(false);

	const startDiv1 = () => {
		setTimeout(() => {
			setBorderRight1('line-1-e');
			setVisible1_1('visible');
			setVisible2(true);
		}, 3000);
	};

	useEffect(() => {
		startDiv1();
	}, []);

	return (
		<>
			<div className="flex text-white">
				<span>Comprobando el estado del servidor</span>
				<div className={`line-1 anim-typewriter-1 ${borderRight1}`}>
					...
				</div>
				<div
					className={`${visible1_1} ml-5 bg-green-500 text-white border border-white px-1`}
				>
					Ok
				</div>
			</div>
			{visible2 ? <Div2 /> : null}
		</>
	);
};

export default Div1;
