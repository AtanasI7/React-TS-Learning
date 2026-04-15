import { Routes, Route, useParams } from "react-router-dom";
import { Link, NavLink, Outlet } from "react-router-dom";
// import RootLayoutBetter from "./comnponents/RootLayout";
// import Home from "./comnponents/Home";
// import About from "./comnponents/About";
// import Products from "./comnponents/Products";
// import ProductDetails from "./comnponents/ProductDetails";
// import DashboardLayout from "./comnponents/DashboardLayout";
// import DashboardHome from "./comnponents/DashboardOverview";
// import DashboardSettings from "./comnponents/DashboardSettings";
// import NotFound from "./comnponents/NotFoundPage";


// 		<Routes>
// 			<Route path="/" element={<RootLayoutBetter />}>
// 				<Route index element={<Home />} />
// 				<Route path="about" element={<About />} />
// 				<Route path="products" element={<Products />} />
// 				<Route path="products/:productId" element={<ProductDetails />} />

// 				<Route path="dashboard" element={<DashboardLayout />}>
// 					<Route index element={<DashboardHome />} />
// 					<Route path="settings" element={<DashboardSettings />} />
// 				</Route>

// 				<Route path="*" element={<NotFound />} />
// 			</Route>
// 		</Routes>

function App() {
	return (
		<Routes>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contacts" element={<Contacts />} />
				<Route path="products" element={<ListProducts />} />
				<Route path="products/:productId" element={<ProductsDetails />}/>


				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

const products = [
	{ id: 1, name: "Laptop", price: 2000 },
	{ id: 2, name: "Phone", price: 1700 },
	{ id: 3, name: "TV", price: 3650 },
];

function ProductsDetails() {
	const { productId } = useParams();

	const product = products.find((p) => p.id == Number(productId))

	if (!product) {
		return <h2>No product Found!</h2>;
	}

	return (
		<div>
			<h2>{product.name}</h2>
			<p>{product.price} euro</p>
		</div>
	);
}

function ListProducts() {
	return (
		<div>
			<h2>Products</h2>

			{products.map((product) => (
				<div key={product.id}>
					<Link to={`${product.id}`}>{product.name}</Link>
				</div>
			))}
		</div>
	);
}

function Home() {
	return <h2>Home Page</h2>;
}

function About() {
	return <h2>About Page</h2>;
}

function Contacts() {
	return <h2>Contact Page</h2>;
}

function NotFound() {
	return <h2>Not Found!</h2>;
}

function RootLayout() {
	return (
		<div>
			<h1>My site</h1>

			<nav>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? "active-link" : "")}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about"
						className={({ isActive }) => (isActive ? "active-link" : "")}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/contacts"
						className={({ isActive }) => (isActive ? "active-link" : "")}
					>
						Contacts
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/products"
						className={({ isActive }) => (isActive ? "active-link" : "")}
					>
						Products
					</NavLink>
				</li>

			</nav>

			<main>
				<Outlet />
			</main>

		</div>


	);
}




// function App() {
// 	return (
// 		<Routes>
// 			<Route path="/" element={<RootLayoutBetter />}>
// 				<Route index element={<Home />} />
// 				<Route path="about" element={<About />} />
// 				<Route path="products" element={<Products />} />
// 				<Route path="products/:productId" element={<ProductDetails />} />

// 				<Route path="dashboard" element={<DashboardLayout />}>
// 					<Route index element={<DashboardHome />} />
// 					<Route path="settings" element={<DashboardSettings />} />
// 				</Route>

// 				<Route path="*" element={<NotFound />} />
// 			</Route>
// 		</Routes>



// 		// <div>
// 		// 	<Routes>
// 		// 		<Route path="/" element={<RootLayout />}>
// 		// 			<Route index element={<Home />} />
// 		// 			<Route path="about" element={<About />} />
// 		// 			<Route path="products" element={<Products />} />
// 		// 			<Route path="*" element={<NotFound />} />
// 		// 		</Route>
// 		// 	</Routes>
// 		// </div>
// 	);
// }



//----

// function NotFound() {
// 	return <h1>404 Not Found</h1>;
// }

// function Home() {
// 	return <h1>Home</h1>;
// }

// function About() {
// 	return <h1>About</h1>;
// }

// function Products() {
// 	return <h1>Products</h1>;
// }

// function RootLayout() {
// 	return (
// 		<div>
// 			<nav>
// 				<NavLink
// 					to="/"
// 					className={({ isActive }) => (isActive ? "active-link" : "")}
// 				>
// 					Home
// 				</NavLink>
// 				<NavLink
// 					to="/about"
// 					className={({ isActive }) => (isActive ? "active-link" : "")}
// 				>
// 					About
// 				</NavLink>
// 				<NavLink
// 					to="/products"
// 					className={({ isActive }) => (isActive ? "active-link" : "")}
// 				>
// 					Products
// 				</NavLink>
// 			</nav>

// 			<main>
// 				<Outlet />
// 			</main>
// 		</div>
// 	);
// }


export default App;