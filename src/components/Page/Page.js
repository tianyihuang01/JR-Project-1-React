const Page = ({ id, active, children }) => {
	let className = "card";

	if (active) {
		className += " card--active";
	}

	return (
		<section>
			<div id={id} className={className}>
				{children}
			</div>
		</section>
	);
};

export default Page;
