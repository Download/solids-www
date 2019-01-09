import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import About from '../routes/about';
import Components from '../routes/components';
import Profile from '../routes/profile';
import Buttons from '../routes/components/buttons';

// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<About path="/about" />
					<Components path="/components" />
					<Buttons path="/components/buttons" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
