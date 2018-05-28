import classNames from 'classnames';
import { h } from 'preact';
import { Row, Col } from '../Layout';
import AppBar, { AppBarAction } from '../AppBar';
import Drawer from '../Drawer';
import LeftNav from '../LeftNav';
import style from './style.scss';


export const HomeLayout = ({ title, children, mainClass, ...attributes }) => (
	<div class={style.solid_applayout} {...attributes}>
		<AppBar title={title} reserveStart fixed>
			<AppBarAction href="#" class="material-icons">file_download</AppBarAction>
		</AppBar>
		<Drawer persistent>
			<LeftNav />
		</Drawer>
		<Drawer persistent end />
		<main class={mainClass}>
			{children}
		</main>
	</div>
);


/*
		<Row fill>
		</Row>


	<div class={style.parallax}>
		<div class={style.parallax_group}>
			<div class={classNames(style.parallax_layer, style.parallax_layer_base)}>
			</div>
			<div class={style.parallax_background}>
				<div class={classNames(style.parallax_layer, style.parallax_layer_bg)} />
				<div class={classNames(style.parallax_layer, style.parallax_layer_bg2)} />
				<div class={classNames(style.parallax_layer, style.parallax_layer_bg3)} />
				<div class={classNames(style.parallax_layer, style.parallax_layer_bg4)} />
				<div class={classNames(style.parallax_layer, style.parallax_layer_bg5)} />
			</div>
		</div>
	</div>
*/


export default HomeLayout;
