import { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {

	return (
		<div>
			<RegisterForm />
			<LoginForm />
			<CreateTaskForm />
			<LoginFormTest />
		</div>
	);
}


type LoginFormData = {
	email: string;
	password: string;
};

function LoginFormTest() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>();

	function onSubmit(data: LoginFormData) {
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="email"
				placeholder="Email"
				{...register("email", { required: "Email is required" })}
			/>
			{errors.email && <p>{errors.email.message}</p>}

			<input
				type="password"
				placeholder="Password"
				{...register("password", { required: "Password is required" })}
			/>
			{errors.password && <p>{errors.password.message}</p>}

			<button type="submit">Login</button>
		</form>
	);
}

//----

function CreateTaskForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState("");

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!title.trim()) {
			setError("Title is required");
			return;
		}

		setError("");
		console.log({
			title,
			description,
		});

		setTitle("");
		setDescription("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Create task</h2>

			<input
				type="text"
				placeholder="Task title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<textarea
				placeholder="Task description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>

			{error && <p>{error}</p>}

			<button type="submit">Create</button>
		</form>
	);
}

//----

function LoginForm() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (email.trim() === "" || password.trim() === "") {
			setError("All fields required.")
			return;
		}

		if (!email.includes("@")) {
			setError("Invalid email.")
			return;
		}

		setError("");
		console.log(email);
		console.log(password);
		console.log("Form submitted.")
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				value={email}
				placeholder="Email"
				onChange={(e) => setEmail(e.target.value)}
			/>

			<input
				type="password"
				value={password}
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
			/>

			{error && <p>{error}</p>}

			<button type="submit">Login</button>
		</form>
	);
}

//----

function RegisterForm() {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [error, setError] = useState<string>("")

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!name || !email || !password || !confirmPassword) {
			setError("All fields required!");
			return;
		}

		if (password.length < 6) {
			setError("Password must be at least 6 chars!");
			return;
		}

		if (password !== confirmPassword) {
			setError("Passwords dont match!");
			return;
		}

		if (!email.includes("@")) {
			setError("Invalid email.")
			return;
		}

		setError("");
		console.log({ name, email, password })

	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Register</h2>

			<input
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>

			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<input
				type="password"
				placeholder="Confirm password"
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
			/>

			{error && <p>{error}</p>}

			<button type="submit">Register</button>
		</form>
	);
}