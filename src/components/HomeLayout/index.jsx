import classNames from 'classnames';
import { h } from 'preact';
import AppBar, { AppBarAction } from 'preact-solids/appbar';
import Drawer from 'preact-solids/drawer';
import LeftNav from '../LeftNav';
import RightNav from '../RightNav';
import Card from 'preact-solids/card';
import style from './style.scss';


export const HomeLayout = ({ title, children, className, mainClass, ...attributes }) => {
	attributes.className = classNames(style.solids, {
		[attributes.class || attributes.className]: attributes.class || attributes.className
	})

	return (
		<div {...attributes}>
			<AppBar title={title} reserveStart reserveEnd fixed tactile prominent shrink>
				<AppBarAction class="material-icons">file_download</AppBarAction>
			</AppBar>
			<Drawer fixed title="Title here">
				<LeftNav />
			</Drawer>
			<Drawer fixed end>
				<RightNav />
			</Drawer>
			<main class={mainClass}>
				<Card class={style.z1}>
					<div class={style.content}>{children}</div>
				</Card>
			</main>
		</div>
	);
}


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
