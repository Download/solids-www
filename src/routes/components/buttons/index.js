import { h } from 'preact';
import { Provider } from '../../../components/Theme';
import HomeLayout from '../../../components/HomeLayout';
import style from './style.scss';

export const Buttons = () => (
	<Provider value={{ classes: style }}>
		<HomeLayout title="Buttons" mainClass={style.home}>
			<h1>Buttons</h1>
			<p><b>Buttons are essential web elements for interaction.</b></p>
		</HomeLayout>
	</Provider>
);

export default Buttons;
