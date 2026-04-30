import { useState, useEffect } from "react";

async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
}

type User = {
    id: number;
    name: string;
}

function LoadUsers() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function loadUsers() {
            try {
                setLoading(true);
                setError(null);

                const data = await fetchUsers();
                setUsers(data);
            } catch {
                setError("Could not load users");
            } finally {
                setLoading(false);
            }
        }

        loadUsers();
    }, []);


}

