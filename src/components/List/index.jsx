import { h } from 'preact';
import defaultClasses from 'solids/list/classes';
import { createHelper } from '../style-classes';
import { Consumer } from '../Theme';

export const List = ({
	interactive = false,
	Component = interactive ? 'nav' : 'ul',
	dense = false,
	twoLines = false,
	avatars = false,
	// list items
	children,
	// other attributes
	...attributes
}) => (

	<Consumer>{({	classes = {},	scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		//		console.info('List', 'classes', classes);

		let classNames = createHelper(classes, scope);
		attributes.className = classNames(classes.list, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
			[classes.dense]: dense,
			[classes.two_line]: twoLines,
			[classes.avatars]: avatars
		});

		return (
			<Component {...attributes}>
				{children}
			</Component>
		);

	}}</Consumer>
);

export default List;

export const Group = List.Group = ({
	Component = 'div',
	// list items
	children,
	// other attributes
	...attributes
}) => (

	<Consumer>{({ classes = {}, scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		let classNames = createHelper(classes, scope);
		attributes.className = classNames(classes.group, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
		});
	
		return (
			<Component {...attributes}>
				{children}
			</Component>
		);

	}}</Consumer>
);

export const Item = List.Item = ({
	Component = 'li',
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
		attributes.className = classNames(classes.item, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
			[classes.selected]: selected,
			[classes.activated]: activated
		});
	
		return (
			<Component role="option" {...attributes}>
				{icon ? <i class={classNames(classes.graphic, 'material-icons')}>{icon}</i> : ''}
				{children}
			</Component>
		);

	}}</Consumer>
);


export const LinkItem = List.LinkItem = (props) => Item({ Component: props.Component || 'a', ...props });

export const ItemGraphic = List.ItemGraphic = ({
	Component = 'span',
	// list items
	children,
	// other attributes
	...attributes
}) => (

	<Consumer>{({ classes = {}, scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		let classNames = createHelper(classes, scope);
		attributes.className = classNames(classes.graphic, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
		});
		children = children;
		return (
			<Component {...attributes}>
				{children && (children.length === 1) && (typeof children[0] === 'string') ? (
					<i class="material-icons">{children}</i>
				): (
					children
				)}
			</Component>
		);

	}}</Consumer>
);

export const Divider = List.Divider = ({
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
		attributes.className = classNames(classes.divider, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
			[classes.inset]: inset,
			[classes.padded]: padded
		});
	
		return (
			<Component {...attributes}>{children}</Component>
		);
			
	}}</Consumer>
);
