import NavItem from "../NavItem/NavItem";
import { PAGE } from "../../../../constants";

const ITEM = [
	{
		key: PAGE.HOME,
	},
	{
		key: PAGE.RESUME,
	},
	{
		key: PAGE.SERVICES,
	},
	{
		key: PAGE.BLOG,
	},
	{
		key: PAGE.CONTACT,
	}
];

const NavList = ({ currentPage, changePage }) => (
	<ul className="navbar-nav ml-auto align-items-center">
		{ITEM.map((item) => (
			<NavItem
				key={item.key}
				active={currentPage == item.key}
				onClick={() => changePage(item.key)}
				foo={`#${item.foo}`}
			>
				{item.key}
			</NavItem>
		))}
	</ul>
);

export default NavList;
