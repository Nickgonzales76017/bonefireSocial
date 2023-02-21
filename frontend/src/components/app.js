import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Friends from '../routes/friends';
import Profile from '../routes/profile';
import Chat from '../routes/chat';
import Signup from '../routes/signup';
import Login from '../routes/login';
import Apps from '../routes/Apps';
import Profile_edit from '../routes/profile_edit';
import { UserContext, UserContextProvider } from "./UserContext";

const App = () => (
	<UserContextProvider>
		<div id="app">
			<Header UserContext={UserContext} />
			<main>
				<Router>
					<Home path="/" />
					<Profile path="/profile/" user="me" UserContext={UserContext} />
					<Profile_edit path="/profile_edit/" user="me" UserContext={UserContext} />
					<Profile path="/profile/:user"  UserContext={UserContext} />
					<Apps path="/apps/" user="all" UserContext={UserContext} />
					<Chat path="/chat/" user="all" UserContext={UserContext} />
					<Login path="/login" UserContext={UserContext} />
					<Friends path="/friends" UserContext={UserContext} />
					<Signup path="/signup" UserContext={UserContext} />
					<Chat path="/chat/:user" UserContext={UserContext}  />
				</Router>
			</main>
		</div>
	</UserContextProvider>
);

export default App;
