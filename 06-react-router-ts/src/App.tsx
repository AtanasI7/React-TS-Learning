import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function App() {
	return (

		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/products" element={<Products />} />
			</Routes>
			<Navigation />
		</div>
	);
}

function Home() {
	return <h1>Home</h1>;
}

function About() {
	return <h1>About</h1>;
}

function Products() {
	return <h1>Products</h1>;
}

function Navigation() {
	return (
		<nav>
			<NavLink
				to="/"
				className={({ isActive }) => (isActive ? "active-link" : "")}
			>
				Home
			</NavLink>
			<NavLink
				to="/about"
				className={({isActive}) => (isActive ? "active-link" : "")}
			>
				About
			</NavLink>
			<NavLink
				to="/products"
				className={({ isActive }) => (isActive ? "active-link" : "")}
			>
				Products
			</NavLink>
		</nav>
	);
}


