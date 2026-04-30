import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type User = {
    id: number;
    name: string;
    email: string;
};

type UserContextValue = {
    user: User | null;
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
};

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    function login() {
        setUser({
            id: 1,
            name: "Ivan",
            email: "ivan@example.com",
        });
    }

    function logout() {
        setUser(null);
    }

    const isLoggedIn = user !== null;

    return (
        <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);

    if (context === null) {
        throw new Error("useUser must be used inside UserProvider");
    }

    return context;
}

export default function UserContextTask() {
    return (
        <UserProvider>
            <Navbar />
            <ProfileBox />
        </UserProvider>
    );
}

function Navbar() {
    const { user, isLoggedIn, login, logout } = useUser();

    return (
        <nav>
            <strong>Navbar</strong>

            {isLoggedIn ? (
                <div>
                    <span>Logged in as {user?.name}</span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </nav>
    );
}

function ProfileBox() {
    const { user, isLoggedIn } = useUser();

    return (
        <section>
            <h2>Profile</h2>

            {isLoggedIn && user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>No user is logged in.</p>
            )}
        </section>
    );
}
