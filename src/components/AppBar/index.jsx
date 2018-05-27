import { h } from 'preact';
import defaultClasses from 'solids/appbar/classes';
import { createHelper } from '../style-classes';
import { Consumer } from '../Theme';


const AppBar = ({
	// https://material.io/guidelines/layout/structure.html#structure-app-bar
	// -------
	// show a condensed version of the appbar
	dense = false,
	// show a prominent version of the appbar
	prominent = false,
	// the appbar stays visible on scroll
	fixed = false,
	// the short version of the appbar
	short = false,
	// the short version of the appbar in collapsed state
	shortCollapsed = false,
	// the collapsed short appbar should include the action item
	shortHasAction = false,
	// title string or jsx element
	title = '',
	// action buttons to show in the appbar
	children,

	// the following attributes are non-standard properties
	// -------

	// shrink the toolbar from prominent to standard size on scroll
	shrink = false,
	// always show the toolbar as floating (with drop-shadow)
	floating = false,
	// reserve space for a toolbar button at the start
	reserveStart = false,
	// reserve space for a toolbar button at the end
	reserveEnd = false,
	// other attributes
	...attributes
}) => (

	<Consumer>{({ classes = {}, scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		let classNames = createHelper(classes, scope);
		attributes.className = classNames(classes.solid_appbar, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
			[classes.appbar_fixed]: fixed,
			[classes.appbar_dense]: dense,
			[classes.appbar_prominent]: prominent,
			[classes.appbar_short]: short,
			[classes.appbar_short_collapsed]: shortCollapsed,
			[classes.appbar_short_has_action]: shortHasAction,
			[classes.appbar_shrink]: shrink,
			[classes.appbar_floating]: floating
		});

		return (
			<header {...attributes}>
				<div>
					<section class={classNames(classes.appbar_start, { [classes.appbar_reserve]: reserveStart })}>
						<span class={classNames(classes.appbar_title)}>{title}</span>
					</section>
					<section class={classNames(classes.appbar_end, { [classes.appbar_reserve]: reserveEnd })}>
						{children}
					</section>
				</div>
			</header>
		);
	}}</Consumer>
);

export default AppBar;


export const AppBarAction = ({
	Component = 'a',
	children,
	// other attributes
	...attributes
	
}) => (
	<Consumer>{({ classes = {}, scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		let classNames = createHelper(classes, scope);
		attributes.className = classNames(classes.appbar_action, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
		});

		return (
			<Component {...attributes}>{children}</Component>
		);
	}}</Consumer>
);
