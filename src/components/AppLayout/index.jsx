import { h } from 'preact';
import defaultClasses from 'solids/applayout/classes';
import { createHelper } from '../style-classes';

import AppBar from '../AppBar';
import Drawer from '../Drawer';

/**
 * Renders an applayout with an appbar and one or two drawers.
 * 
 * @param {object} props
 */
const AppLayout = ({
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
	// classes mapping
	classes = defaultClasses,
	// local or mixed scope (for CSS Modules)
	// local: only use altered (locally scoped) CSS class names
	// mixed: use both global as well as locally scoped class names
	scope = 'local',
	// helper function to compile class list based on classes and scope
	classNames = createHelper(classes, scope),
	// other attributes
	...attributes
}) => {

	console.info('AppLayout');

	attributes.className = classNames(classes.solid_applayout, {
		[attributes.className]: attributes.className
	});

	const appBar = children && children.filter(x => x.nodeName === AppBar)[0];
	const startDrawer = children && children.filter(x => ((x.nodeName === Drawer) && (!x.attributes.end)))[0];
	const endDrawer = children && children.filter(x => ((x.nodeName === Drawer) && (x.attributes.end)))[0];
	children = children.filter(x => ((x.nodeName !== AppBar) &&	(x.nodeName !== Drawer)));

	return (
		<div {...attributes}>
			{appBar ? <AppBar {...appBar.attributes}>{appBar.children}</AppBar> : ''}
			<div class={classes.applayout_row}>
				{startDrawer ? <Drawer {...startDrawer.attributes}>{startDrawer.children}</Drawer> : ''}
				{children}
				{endDrawer ? <Drawer {...endDrawer.attributes}>{endDrawer.children}</Drawer> : ''}
			</div>
		</div>
	);
};

export default AppLayout;
