import React from "react";
// import ReactDOM from "react-dom";

const NavItem = ({ active, foo, pageName, onClick, changePage, children }) => {
	let className = "nav-link";

	if (active) {
		className += " nav--active";
	}

	//   const onClick = (event) => {
	//     // console.log(event);

	//     console.log('Clicked', pageName);
	//     // currentPage = pageName;
	// 	changePage(pageName)
	//   };

	return (
		<li className="nav-item">
			<a
				onClick={(event) => {
					event.preventDefault();
					onClick();
				}}
				className={className}
				href={foo}
			>
				{children}
			</a>
		</li>
	);
};

export default NavItem;
