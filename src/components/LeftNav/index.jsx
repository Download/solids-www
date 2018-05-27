import { h } from 'preact';
import { Link } from 'preact-router/match';
import { createHelper } from '../style-classes';
import { Consumer } from '../Theme';

import defaultClasses from 'solids/list/classes';
import { ListGroup, Nav, ListItem, ListDivider } from '../../components/List';


export const LeftNav = ({ children, ...attributes }) => (
	<Consumer>{({	classes = {},	scope = 'local'	}) => {

		classes = { ...defaultClasses, ...classes };
		let classNames = createHelper(classes, scope);
		const link = { Component: Link, activeClassName: classNames(classes.list_item_selected) };

		return (
			<ListGroup>
				<Nav>
					<ListItem {...link} href="/" icon="home">Home</ListItem>
					<ListItem {...link} href="/profile" icon="star">Me</ListItem>
					<ListItem {...link} href="/profile/john" icon="send">John</ListItem>
				</Nav>
				<ListDivider />
				<Nav>
					<ListItem icon="inbox">Inbox</ListItem>
					<ListItem icon="star">Star</ListItem>
					<ListItem icon="send">Sent Mail</ListItem>
					<ListItem icon="drafts">Drafts</ListItem>
				</Nav>
			</ListGroup>
		);
	}}</Consumer>
);

export default LeftNav;
