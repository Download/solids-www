import { h } from 'preact';

import defaultClasses from 'solids/drawer/classes';
import { createHelper } from '../style-classes';
import { Consumer } from '../Theme';

export const Drawer = ({

	// the following attributes are standard properties of material design drawers
	// see https://material.io/guidelines/layout/structure.html#structure-side-nav
	// -------

	// show a temporary drawer overlaying the content when expanded, or just a button when collapsed
	temporary = false,
	// show the temporary drawer as floating
	floating = false,
	// show a drawer alongside the content when expanded, or a button when collapsed
	persistent = false,
	// show a drawer alongside the content that cannot be collapsed
	permanent = false,
	// show a temporary drawer on small screens and a persistent drawer on large screens
	// when using this setting, don't specify temporary/persistent/permanent as they will
	// override this setting.
	responsive = !temporary && !persistent && !permanent,

	// title string or jsx element
	title = '',
	// navigation items to show in the drawer
	children = undefined,
	//
	end = false,
	//
	button, // = (<i class="material-icons">menu</i>),
	// other attributes
	...attributes
}) => (

	<Consumer>{({ classes = {}, scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		console.info('Drawer', 'classes', classes);
		
		let classNames = createHelper(classes, scope);
		attributes.className = classNames(classes.solid_drawer, {
			[classes.drawer_end]: end,
			[classes.drawer_temporary]: temporary,
			[classes.drawer_persistent]: persistent,
			[classes.drawer_permanent]: permanent,
			[classes.drawer_responsive]: responsive,
			[classes.drawer_floating]: floating
		});

		let id = `${classes.solid_drawer}_${(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)).toString(36)}`;
		// hack to bypass weird babel-loader error about unknown token
		title = title;
		children = children;
		button = button;
		// /hack

		return (
			<aside {...attributes}>
				{!permanent && (responsive || persistent) ? <input type="checkbox" class={classes.drawer_toggle_persistent} id={`${id}_persistent`} /> : ''}
				{!permanent && (responsive || persistent) ? <label for={`${id}_persistent`} class={classes.drawer_button_persistent}><span class={classes.appbar_icon}>{button ? button : <i class="material-icons">menu</i>}</span></label> : ''}
				{!permanent && (responsive || temporary) ? <input type="checkbox" class={classes.drawer_toggle_temporary} id={`${id}_temporary`} /> : ''}
				{!permanent && (responsive || temporary) ? <label for={`${id}_temporary`} class={classes.drawer_button_temporary}><span class={classes.appbar_icon}>{button ? button : <i class="material-icons">menu</i>}</span></label> : ''}
				<nav>
					<header><div>{title}</div></header>
					<nav>{children}</nav>
					<footer>footer</footer>
				</nav>
			</aside>
		);
	}}</Consumer>
);

export default Drawer;
