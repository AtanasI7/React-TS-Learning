import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
	return (
		<div style={{ display: "flex", gap: "20px" }}>
			<aside>
				<h2>Dashboard</h2>

				<nav>
					<NavLink to="/dashboard">Overview</NavLink>{" "}
					<NavLink to="/dashboard/settings">Settings</NavLink>{" "}
				</nav>
			</aside>

			<section>
				<Outlet />
			</section>
		</div>
	);
}

export default DashboardLayout;