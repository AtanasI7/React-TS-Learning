import useFetch from "./FetchTest";

type User = {
  id: number;
  name: string;
};

function UsersPage() {
    const { data, loading, error } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            {data?.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}

export default UsersPage;