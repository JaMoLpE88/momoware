import { useEffect } from 'react';
import Start from './components/Start';

import './Intro.css';

const Intro = () => {
	useEffect(() => {
		document.title = 'Desarrollo de Software';
	}, []);

	return (
		<div className="flex flex-wrap v-screen w-screen bg-bg-dark-gray content-center justify-center font-robotomono">
			<div className="flex-col text-sm w-auto sm:text-base content-center justify-center">
				<Start />
			</div>
		</div>
	);
};

export default Intro;
