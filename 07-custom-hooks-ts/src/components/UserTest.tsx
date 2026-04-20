import { useState } from "react";

type User = {
    id: number;
    name: string;
};

function useAuth() {
    const [user, setUser] = useState<User | null>(null);

    function login(name: string) {
        setUser({ id: Date.now(), name });
    }

    function logout() {
        setUser(null);
    }

    const isAuthenticated = user !== null;

    return {
        user,
        isAuthenticated,
        login,
        logout,
    };
}

export default useAuth;