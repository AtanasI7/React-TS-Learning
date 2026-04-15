import { NavLink, Outlet } from "react-router-dom";

function RootLayoutBetter() {
	return (
		<div>
			<header>
				<h1>My Shop</h1>
				
				<nav>
					<NavLink to="/">Home</NavLink>{" "}
					<NavLink to="/about">About</NavLink>{" "}
					<NavLink to="/products">Products</NavLink>{" "}
					<NavLink to="/dashboard">Dashboard</NavLink>
				</nav>
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default RootLayoutBetter;