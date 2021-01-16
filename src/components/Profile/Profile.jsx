import './Profile.css';

import AvatarHTML from '../../assets/js/avatar.js';
import { Link } from 'react-router-dom';

const Profile = () => {
	return (
		<div
			className={`flex flex-wrap h-full w-full bg-background-blue content-center justify-center font-robotomono animate__animated animate__zoomIn animate__faster`}
		>
			<div className="flex flex-col sm:flex-row">
				<div
					className="text-center"
					id="profile"
					dangerouslySetInnerHTML={{ __html: AvatarHTML }}
				></div>
				<div className="flex flex-col sm:ml-5 text-white">
					<button className="flex justify-center content-center opacity-50 px-2 py-1 text-gray-200 border hover:bg-white hover:bg-opacity-25 hover:opacity-100 cursor-not-allowed focus:outline-none">
						<i className="far fa-file-pdf fa-2x"></i>
						<span className="ml-2 my-auto">Currículum</span>
					</button>
					<div className="mt-2 flex">
						<div>Nombre: </div>
						<div className="ml-auto text-yellow-300">
							Javier Moreno López
						</div>
					</div>
					<div className="mt-2 flex">
						<div>F. Nacimiento:</div>
						<div className="ml-auto text-yellow-300">
							26/08/1988
						</div>
					</div>
					<div className="mt-2 flex">
						<div>Ciudad:</div>
						<div className="ml-auto text-yellow-300">Valencia</div>
					</div>
					<div className="mt-2 flex">
						<div>Titulación:</div>
						<div
							title="Ciclo Formativo de Grado Superior"
							className="ml-auto text-yellow-300"
						>
							C.F.G.S.
						</div>
					</div>
					<div className="mt-2 flex">
						<div>Modalidad:</div>
						<div
							title="Desarrollador de Aplicaciones Informáticas"
							className="ml-auto text-yellow-300"
						>
							D.A.I.
						</div>
					</div>
					<div className="mt-2 flex">
						<div className="text-green-300 mx-auto">
							Desarrollador Full Stack
						</div>
					</div>
					<div className="mt-2 flex">
						<div className="text-red-300 mx-auto">
							MERN, Ionic (React) y React Native
						</div>
					</div>
					<div className="mt-2 flex">
						<div className="mx-auto">
							<span className="text-yellow-100">
								JavaScript 💛
							</span>
							<span className="ml-2 text-blue-100">
								TypeScript 💙
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full mt-20 content-center">
				<div className={`text-center`}>
					<Link
						to="/home"
						className="opacity-25 text-gray-200 hover:opacity-100  duration-500"
					>
						<i className="far fa-arrow-alt-circle-left fa-2x"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Profile;
