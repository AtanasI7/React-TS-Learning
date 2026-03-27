import React, { useState } from "react";

export default function App() {

    return (
        <div>
            <Counter num={13} />
            <ClickButton />
            <NameInput />
            <EmailInput />
            <SimpleForm />
            <ThemeSwitcher />
            <ToggleMenuDrop />
        </div>
    )
}

function ToggleMenuDrop() {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    function toggleDropDown() {
        setIsClicked(!isClicked);
    }

    return (
        <div>
            <button onClick={toggleDropDown}>{isClicked ? "Hide" : "Show"}</button>
            <ul style={{
                display: isClicked ? "block" : "none",
                listStyle: "none"
            }}>
                <li>Home</li>
                <li>Contacts</li>
                <li>About</li>
            </ul>
            
        </div>
    )
}




//----

function ThemeSwitcher() {
    const [isDark, setIsDark] = useState<boolean>(false);

    function toggleTheme() {
        setIsDark(!isDark);
    }

    return (
        <div
            style={{
                backgroundColor: isDark ? "#222" : "#fff",
                color: isDark ? "#fff" : "#000",
                padding: "20px",
            }}
        >
            <h2 style={{
                color: isDark ? "white" : "black"
            }}>{isDark ? "Dark mode" : "Light mode"}</h2>
            <button onClick={toggleTheme}>
                Switch theme
            </button>
        </div>
    )

}


//---

function SimpleForm() {
    const [name, setName] = useState<string>("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(`Sent: ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

//----

function EmailInput() {
    const [email, setEmail] = useState<string>("");

    return (
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    )
}


//----

function NameInput() {
    const [name, setName] = useState<string>("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <p>Hello, {name}!</p>
        </div>
    )
}


//----

function ClickButton() {
    const [count, setCount] = useState<number>(0);

    function handleClick() {
        setCount(count + 1);
        alert(`You presses the button ${count} times`);
    }

    return <button onClick={handleClick}>Press me {count}</button>

}

//----

function Counter(props: { num: number }) {
    const [count, setCount] = useState<number>(props.num);
    return <button onClick={() => setCount(count + 1)}>Times clicked {count}</button>
}

//----