import { h } from 'preact';
import { Provider } from '../../components/Theme';
import HomeLayout from '../../components/HomeLayout';
import style from '../../components/HomeLayout/style';
import 'preact-material-components/List/style.css';

export const About = () => (
	<Provider value={{ classes: style }}>
		<HomeLayout title="About" mainClass={style.home}>
			<h1>About</h1>
			<p><b>css-only material design primitives</b></p>
		</HomeLayout>
	</Provider>
);

export default About;
