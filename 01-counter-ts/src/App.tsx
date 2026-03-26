import { useState, ChangeEvent } from 'react';

export default function App() {
    const users: { id: number, name: string, age: number}[] = [
        { id: 1, name: "ivan", age: 13},
        { id: 2, name: "gosho", age: 19},
        { id: 3, name: "petio", age: 15}
    ];

    return (
        <div>
            <h1>Header</h1>
            <MyButton />
            <Counter />
            <Menu />
            <SayHello name="John" />
            <Sum a={5} b={10} />
            <UsersInfo users={users} />
            <SomeButton text="Hello"/>
            <SomeButton text="Hey"/>
            <SomeButton text="Hi"/>
            <UserProfileInfo age={20} name="Kiro Breika" city="Sofia"/>
            <Card title="React" description="Basics scripts"/>
            <Card title="Python" description="Basic tasks" isPassed={true}/>
        </div>
    );
}

type CardProps = {
    title: string,
    description: string,
    isPassed?: boolean
}

function Card({ title, description, isPassed}: CardProps) {

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button disabled={isPassed}>Enroll</button>
        </div>
    )
}

type UserProfileProps = {
    age: number,
    name: string,
    city: string,
}

function UserProfileInfo({ age, name, city }: UserProfileProps) {

    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{city}</p>
        </div>
    );
}




function SomeButton(props: { text: string }) {
    return <button>{props.text}</button>
}

function UsersInfo(props: {users: { id: number, name: string, age: number }[] }) {

    return (
        <div>
            {props.users.map((user) => (
                <div>
                    <h2>{user.name}</h2>
                    <p>Age: {user.age}</p>
                    <p>Id: {user.id}</p>
                </div>
            ))}
        </div>
    )

}

function Sum(props: { a: number, b: number }) {

    return (
        <div>
            <p>Сумата на {props.a} и {props.b} е: {props.a + props.b}</p>
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Брой: {count}</p>
            <button onClick={() => setCount(count + 1)}>Пъти натиснат този бутон: {count}</button>
        </div>
    )
}

function SayHello(props: { name: string }) {

    return (
        <div>
            <p>Hello, {props.name}!</p>
        </div>
    )

}

function ToggleMessage() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"}
            </button>

            {isVisible && <p>Hello!</p>}
        </div>
    )
}

function updateText() {
    const [name, setName] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <p>Inserted text: {name}</p>
        </div>
    )
}

function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setIsOpen((prev) => !prev)}>Menu</button>

            {isOpen && (
                <ul>
                    <li>Home</li>
                    <li>Info</li>
                    <li>Contacts</li>
                </ul>
            )}
        </div>
    );
}


function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Click {count} times
        </button>
    )
}