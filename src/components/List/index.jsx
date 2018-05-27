import { h } from 'preact';
import defaultClasses from 'solids/list/classes';
import { createHelper } from '../style-classes';
import { Consumer } from '../Theme';

export const List = ({
	Component = 'div',
	dense = false,
	twoLines = false,
	avatar = false,
	// list items
	children,
	// other attributes
	...attributes
}) => (

	<Consumer>{({	classes = {},	scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		//		console.info('List', 'classes', classes);

		let classNames = createHelper(classes, scope);
		attributes.className = classNames(classes.solid_list, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
			[classes.list_dense]: dense,
			[classes.list_two_line]: twoLines,
			[classes.list_avatar]: avatar
		});

		return (
			<Component {...attributes}>
				{children}
			</Component>
		);

	}}</Consumer>
);

export default List;

export const Nav = (props) => List({ ...props, Component: 'nav' });
export const Ul = (props) => List({ ...props, Component: 'ul' });

export const ListGroup = ({
	Component = 'div',
	// list items
	children,
	// other attributes
	...attributes
}) => (

	<Consumer>{({ classes = {}, scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		let classNames = createHelper(classes, scope);
		attributes.className = classNames(classes.list_group, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
		});
	
		return (
			<Component {...attributes}>
				{children}
			</Component>
		);

	}}</Consumer>
);

export const ListItem = ({
	Component = 'a',
	selected = false,
	activated = false,
	// material icon
	icon = '',
	// text
	children,
	// other attributes
	...attributes
}) => (

	<Consumer>{({ classes = {}, scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		let classNames = createHelper(classes, scope);
		attributes.className = classNames(classes.list_item, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
			[classes.list_item_selected]: selected,
			[classes.list_item_activated]: activated
		});
	
		return (
			<Component {...attributes}>
				{icon ? <i class={classNames(classes.list_item_graphic, 'material-icons')}>{icon}</i> : ''}
				{children}
			</Component>
		);

	}}</Consumer>
);


export const ListDivider = ({
	Component = 'hr',
	//
	inset = false,
	//
	padded = false,
	children,
	// other attributes
	...attributes
}) => (

	<Consumer>{({ classes = {}, scope = 'local' }) => {

		classes = { ...defaultClasses, ...classes };
		let classNames = createHelper(classes, scope);
		attributes.className = classNames(classes.list_divider, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
			[classes.list_divider_inset]: inset,
			[classes.list_divider_padded]: padded
		});
	
		return (
			<Component {...attributes}>{children}</Component>
		);
			
	}}</Consumer>
);
