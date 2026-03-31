import React, { useState } from "react";

export default function App() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <Counter num={13} />
            <ClickButton />
            <NameInput />
            <EmailInput />
            <SimpleForm />
            <ThemeSwitcher />
            <ToggleMenuDrop />
            <TodoList />
            <FormSimple />
            <SearchInput value={search} onChangeValue={setSearch} />
            <SecondCounter />
            <ToggleLightDark />
            <LiveInput />
            <ToDoListBasic />
        </div>
    )
}

type Taask = {
    id: number;
    title: string;
    description?: string;
    isDone: boolean;
}


function ToDoListBasic() {
    const [tasks, setNewTask] = useState<Taask[]>([]);
    const [newTitle, setNewTitle] = useState<string>("");
    const [newDesc, setNewDesc] = useState<string>("");
    const [errors, setErrors] = useState<string[]>([]);

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        //must add logic here to prevent invalid form submission

        alert("Task Added! :)")
    }

    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewTitle(e.target.value);
    }

    function handleDescChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewDesc(e.target.value);
    }

    function handleTitleCheck(): string | any {
        if (newTitle.trim() === "") {
            setErrors([...errors, "Title must be filled!"]);
            return;
        }
        return newTitle;
    }

    function handleDescCheck(): string | any {
        if (newDesc.trim() === "") {
            setErrors([...errors, "Description must be filled!"]);
            return;
        }
        return newDesc;
    }

    function handleTaskCreate() {
        const title: string = handleTitleCheck();
        const desc: string = handleDescCheck();

        const newTask: Taask = {
            id: Date.now(),
            title: title,
            description: desc,
            isDone: false
        }

        setNewTask([...tasks, newTask]);
        setNewTitle("");
        setNewDesc("");
        setErrors([]);
    }

    return (
        <div>
            <h2>Todo List Number 2</h2>
            <form onSubmit={handleFormSubmit}>

                <input
                    value={newTitle}
                    onChange={handleTitleChange}
                    placeholder="Add Title"
                />
                <input
                    value={newDesc}
                    onChange={handleDescChange}
                    placeholder="Add Description"
                />
                <button onClick={handleTaskCreate}>Add</button>

            </form>

            {errors.map((error) => (
                <div>
                    <span>{error}</span>
                </div>
            ))}

            {tasks.map((task) => (
                <div key={task.id}>
                    <span>
                        {task.title} - {task.isDone ? "Done" : "Not done"}
                        {task.description}
                    </span>
                </div>
            ))}
        </div>
    );
}

//----

function LiveInput() {
    const [text, setText] = useState<string>("");

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }

    return (
        <div>
            <input
                type="text"
                onChange={handleInput}
                value={text}
            />
            <h2>Hello, Bako {text}</h2>
        </div>
    )
}

//----

function ToggleLightDark() {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    function handleToggle() {
        setIsToggled(!isToggled)
    }

    return (
        <div>
            <p style={{
                backgroundColor: isToggled ? "#222" : "#fff",
                color: isToggled ? "#fff" : "#000",
                padding: "20px",
            }}>{isToggled ? "Dark mode" : "Light mode"}</p>

            <button style={{
                color: isToggled ? "white" : "black",
                backgroundColor: isToggled ? "black" : "white",
                border: "none",
                borderRadius: "16px",
                padding: "6px"
            }} onClick={handleToggle}>Click me - Toggle</button>
        </div>
    )
}

//----

function SecondCounter() {
    const [num, setNum] = useState<number>(0);

    function handleClick() {
        setNum(num + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Times clicked: {num}</button>
        </div>
    )
}

//----

type SearchInputProps = {
    value: string;
    onChangeValue: (value: string) => void;
}

function SearchInput({ value, onChangeValue }: SearchInputProps) {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChangeValue(e.target.value)}
            placeholder="Search..."
        />
    );
}

//----

function FormSimple() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (name.trim() === "" || email.trim() === "") {
            setError("Всички полета са задължителни");
            return;
        }

        if (!email.includes("@")) {
            setError("Имейлът не е валиден");
            return;
        }

        setError("");
        alert(`Изпратени данни: ${name}, ${email}`);
        setName("");
        setEmail("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Име"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Имейл"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {error && <p>{error}</p>}

            <button type="submit">Изпрати</button>
        </form>
    );

}

//----

type Task = {
    id: number;
    title: string;
    done: boolean;
};

function TodoList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [text, setText] = useState<string>("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }

    function addTask() {
        if (text.trim() === "") return;

        const newTask: Task = {
            id: Date.now(),
            title: text,
            done: false,
        };

        setTasks([...tasks, newTask]);
        setText("");
    }

    function removeTask(id: number) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function toggleTask(id: number) {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    }

    return (
        <div>
            <h2>Todo List</h2>

            <input
                value={text}
                onChange={handleChange}
                placeholder="Добави задача"
            />
            <button onClick={addTask}>Add</button>

            {tasks.map((task) => (
                <div key={task.id}>
                    <span>
                        {task.title} - {task.done ? "Done" : "Not done"}
                    </span>
                    <button onClick={() => toggleTask(task.id)}>Toggle</button>
                    <button onClick={() => removeTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

//----

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