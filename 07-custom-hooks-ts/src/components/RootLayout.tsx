import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div>
            <header>
                <h1>Test</h1>

                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/switcher">Switcher</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;