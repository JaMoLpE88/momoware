import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Home from '../components/Home/Home';
import Intro from '../components/Intro/Intro';
import Profile from '../components/Profile/Profile';

const AppRouter = () => {
	return (
		<Router>
			<div className="flex h-full w-full content-center justify-center">
				<Switch>
					<Route exact path="/home" component={Home} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/" component={Intro} />

					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
