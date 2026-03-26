

export default function App() {
    const users: User[] = [
        { id: 1, name: "Gosho", age: 24, isAdmin: true },
        { id: 2, name: "nasko", age: 7, isAdmin: false },
        { id: 3, name: "mitko", age: 13, isAdmin: false },
    ]

    const tasks = [
        { id: 1, title: "Learn React", done: true },
        { id: 2, title: "Practice props", done: false },
        { id: 3, title: "Build small app", done: false },
    ];

    return (
        <div>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
            <MyButton text="Enroll" />
            <MyButton text="You Can't Click Me" isDisabled={true} />
            <ProductCard title="Tomato" price={0.39} inStock={true} />
            <ProductCard title="Cucumber" price={0.69} inStock={false} />
            {tasks.map((task) =>
                (<TaskCard key={task.id} title={task.title} done={task.done} />

            ))}
        </div>
    )
}

//----

type TaskCardProps = {
    id: number,
    title: string,
    done: boolean
}

function TaskCard({ title, done }: TaskCardProps) {

    return (
        <div>
            <h1>{title}</h1>
            <p>{done ? "done" : "not done"}</p>
        </div>
    )

}

//----

type ProductCardProps = {
    title: string,
    price: number,
    inStock: boolean
}

function ProductCard({ title, price, inStock }: ProductCardProps) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{inStock ? "Available" : "Unavailable"}</p>
        </div>
    )
}

//----

function MyButton(props: { text: string, isDisabled?: boolean }) {

    return (
        <div>
            <button disabled={props.isDisabled}>{props.text}</button>
        </div>
    )
}

//----

type User = {
    id: number,
    name: string,
    age: number,
    isAdmin?: boolean
}

type UserCardProps = {
    user: User
}

function UserCard({ user }: UserCardProps) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
            {user.isAdmin && <p>Admin User</p>}
        </div>
    )
}

//----