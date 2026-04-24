import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div>
            <header>
                <h1>Test</h1>

                <nav>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/switcher">Switcher</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>

                    <li>
                        <NavLink to="/reallogin">Real Login</NavLink>
                    </li>

                    <li>
                        <NavLink to="/users">Users Page</NavLink>
                    </li>

                    <li>
                        <NavLink to="/debounceSearch">Search timer Test</NavLink>
                    </li>

                    <li>
                        <NavLink to="/counter">Counter</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contextTest">Context test</NavLink>
                    </li>

                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;