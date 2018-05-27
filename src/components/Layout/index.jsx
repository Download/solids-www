import { h } from 'preact';
import defaultClasses from 'solids/layout/classes';
import { createHelper } from '../style-classes';
import { Consumer } from '../Theme';

/**
 * Renders a layout with rows or columns.
 *
 * @param {object} props
 */
const Layout = ({
	Component = 'div',
	// whether to render a row or a column layout
	row = false,
	//
	fill = false,
	
	children,
	// other attributes
	...attributes
}) => (

	<Consumer>{({	classes = {},	scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		let classNames = createHelper(classes, scope);
		attributes.className = classNames(classes.solid_layout, {
			[attributes.className || attributes.class]: attributes.className || attributes.class,
			[classes.layout_row]: row,
			[classes.layout_col]: !row,
			[classes.layout_fill]: fill
		});
	
		return (
			<Component {...attributes}>{children}</Component>
		);

	}}</Consumer>
);

export default Layout;

export const Col = (props) => Layout({ ...props, row: false });
export const Row = (props) => Layout({ ...props, row: true });
