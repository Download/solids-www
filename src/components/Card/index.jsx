import { h } from 'preact';
import defaultClasses from 'solids/card/classes';
import { createHelper } from '../style-classes';
import { Consumer } from '../Theme';


export const Card = ({
	// https://material.io/guidelines/layout/structure.html#structure-app-bar
	// -------
	// show an outlined card
	outlined = false,
	children,
	// other attributes
	...attributes
}) => (

	<Consumer>{({ classes = {}, scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		let classNames = createHelper(classes, scope);
		attributes.className = classNames(classes.card, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
			[classes.outlined]: outlined,
		});

		return (
			<div {...attributes}>
				{children}
			</div>
		);
	}}</Consumer>
);

export default Card;

/*
export const AppBarAction = ({
	Component = 'a',
	children,
	// other attributes
	...attributes
	
}) => (
	<Consumer>{({ classes = {}, scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		let classNames = createHelper(classes, scope);
		attributes.className = classNames(classes.action, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
		});

		return (
			<Component {...attributes}>{children}</Component>
		);
	}}</Consumer>
);
*/