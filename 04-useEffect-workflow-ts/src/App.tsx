import { useEffect, useState } from "react";

export default function App() {

    return (
        <div>
            <Example />
            {/* <PostsList /> */}
            {/* <UserPage /> */}
            <Clock />
            {/* <PostsListTwo /> */}
            <UserPageTwo />
        </div>
    )
}

//----

function Clock() {
    const [time, setTime] = useState<string>(new Date().toLocaleDateString());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date().toLocaleDateString());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return <h2>{time}</h2>;
}

type UserTwo = {
    id: number;
    name: string;
    email: string;
}

function UserPageTwo() {
    const [users, setUsers] = useState<UserTwo[]>([]);
    const [search, setSearch] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        try {
            setSearch("");
            setIsLoading(true);
            setError(null);

            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!response.ok) {
                throw new Error("Неуспешна заявка!");
            }

            const data: UserTwo[] = await response.json();
            setUsers(data);
        } catch (err) {
            setError("Не успяхме да заредим users!");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()));

    if (isLoading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Users</h1>

            <input
                type="text"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={fetchUsers}>Reload</button>

            {filteredUsers.length === 0 ? (
                <p>No users found</p>
            ) : (
                filteredUsers.map((user) => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                ))
            )}
        </div>
    );
}

//----

type User = {
    id: number,
    name: string,
    email: string,
}

function UserPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok) {
                    throw new Error("неуспешна заявка!");
                }

                const data: User[] = await response.json();
                setUsers(data);
            }
            catch (err) {
                setError("Не успяхме да заредим users!")
            }
            finally {
                setLoading(false);
            }
        }

        fetchUsers()
    }, []);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Users</h1>

            <input
                type="text"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredUsers.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}

//----

type PostTwo = {
    id: number;
    title: string;
    body: string;
}

function PostsListTwo() {
    const [posts, setPosts] = useState<PostTwo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const sleep = (ms: number): Promise<void> =>
        new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                setError(null);

                await sleep(5000);

                const response = await fetch("https://jsonplaceholder.typicode.com/posts");

                if (!response.ok) {
                    throw new Error("Неуспешно зареждане на постовете");
                }

                const data: PostTwo[] = await response.json();
                setPosts(data);
            } catch (err) {
                setError("Възникна грешка при заявката");
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );

}

//----

type Post = {
    id: number;
    title: string;
    body: string;
};

function PostsList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const sleep = (ms: number): Promise<void> =>
        new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true);
                setError(null);

                await sleep(5000);

                const response = await fetch("https://jsonplaceholder.typicode.com/posts");

                if (!response.ok) {
                    throw new Error("Неуспешно зареждане на постовете");
                }

                const data: Post[] = await response.json();
                setPosts(data);
            } catch (err) {
                setError("Възникна грешка при заявката");
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

//----

function Example() {
    useEffect(() => {
        console.log("Effect runs");
    });

    return <div>Hello</div>;
}