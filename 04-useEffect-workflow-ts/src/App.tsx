import { useEffect, useState } from "react";

export default function App() {

    return (
        <div>
            <Example />
            <PostsList />
        </div>
    )
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