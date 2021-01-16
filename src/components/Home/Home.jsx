import { useEffect } from 'react';

import './Home.css';

import { Link } from 'react-router-dom';

const Home = () => {
	useEffect(() => {
		document.title = 'Desarrollo de Software';
	}, []);

	return (
		<div className="flex flex-col h-full w-full bg-background-blue content-center justify-center font-robotomono animate__animated animate__zoomIn animate__faster">
			<div className="flex content-center justify-center mb-5">
				<h1 className="font-terminator text-4xl sm:text-7xl text-gray-200">
					momoware
				</h1>
			</div>
			<div className="flex flex-col space-y-5 content-center justify-center sm:flex-row sm:space-y-0 sm:space-x-5">
				<div
					className={`text-center opacity-25 text-gray-200 hover:opacity-100  duration-500`}
				>
					<Link to="/profile">
						<i className="far fa-user-circle fa-3x"></i>
					</Link>
				</div>
				<div
					className={`text-center opacity-25 text-gray-200 hover:opacity-100  duration-500`}
				>
					<a
						href="https://www.linkedin.com/in/jamolpe88/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-linkedin fa-3x"></i>
					</a>
				</div>
				<div
					className={`text-center opacity-25 text-gray-200 hover:opacity-100  duration-500`}
				>
					<a
						href="https://www.freelancer.com/u/JaMoLpE88"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fas fa-briefcase fa-3x"></i>
					</a>
				</div>
				<div
					className={`text-center opacity-25 text-gray-200 hover:opacity-100  duration-500`}
				>
					<a
						href="https://github.com/JaMoLpE88/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-github fa-3x"></i>
					</a>
				</div>
				<div
					className={`text-center opacity-25 text-gray-200 hover:opacity-100  duration-500`}
				>
					<a
						href="mailto:info@momoware.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="far fa-envelope fa-3x"></i>
					</a>
				</div>
			</div>
			<div className="w-full mt-20 content-center">
				<div className={`text-center`}>
					<Link
						to="/"
						className="opacity-25 text-red-200 hover:opacity-100  duration-500"
					>
						<i className="fas fa-power-off fa-2x"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
