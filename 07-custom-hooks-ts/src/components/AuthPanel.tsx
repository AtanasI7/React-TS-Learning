import useAuth from "./UserTest";

function AuthPanel() {
    const { user, isAuthenticated, login, logout } = useAuth();

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <p>Hello, {user?.name}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <button onClick={() => login("Ivan")}>Login</button>
            )}
        </div>
    );
}

export default AuthPanel;