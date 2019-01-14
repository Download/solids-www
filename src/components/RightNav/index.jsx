import { h } from 'preact';
import { Link } from 'preact-router/match';
import { createHelper } from 'preact-solids/style-classes';
import { Consumer } from 'preact-solids/theme';

import defaultClasses from 'solids/list/classes';
// import { ListGroup, Nav, ListItem, ListDivider } from '../../components/List';
// import List from '../List';
// import Icon from 'preact-material-components/Icon';
import List from 'preact-material-components/List';


export const RightNav = ({ children, ...attributes }) => (
	<Consumer>{({	classes = {},	scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		let classNames = createHelper(classes, scope);
		const link = { Component: Link, activeClassName: classNames(classes.selected) };

		return (
			<List.Group>
				<List>
					<List.LinkItem {...link} href="/"><List.ItemGraphic>home</List.ItemGraphic>Home</List.LinkItem>
					<List.LinkItem {...link} href="/about"><List.ItemGraphic>info</List.ItemGraphic>About</List.LinkItem>
					<List.LinkItem {...link} href="/components"><List.ItemGraphic>extension</List.ItemGraphic>Components</List.LinkItem>
					<List.LinkItem {...link} href="/profile"><List.ItemGraphic>star</List.ItemGraphic>Me</List.LinkItem>
					<List.LinkItem {...link} href="/profile/john"><List.ItemGraphic>send</List.ItemGraphic>John</List.LinkItem>
					<List.Divider />
					<List.LinkItem><List.ItemGraphic>inbox</List.ItemGraphic>Inbox</List.LinkItem>
					<List.LinkItem><List.ItemGraphic>drafts</List.ItemGraphic>Drafts</List.LinkItem>
				</List>
			</List.Group>
		);
	}}</Consumer>
);

export default RightNav;
