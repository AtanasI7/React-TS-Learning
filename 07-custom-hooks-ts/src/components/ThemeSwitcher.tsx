// import useToggle from "./hooks";
import { useState } from "react";
import useLocalStorage from "./LocalStorageTest";


function ThemeSwitcher() {
	const [isDark, setIsDark] = useLocalStorage("theme-dark", false);

	return (
		<button onClick={() => setIsDark((prev) => !prev)}>
			{isDark ? "Dark" : "Light"}
		</button>
	);
}

// function useToggle(initialValue=false) {
// 	const [value, setValue] = useState<boolean>(initialValue);

// 	function toggle() {
// 		setValue((prev) => !prev)
// 	}

// 	return { value, toggle, setValue }
// }

// function ThemeSwitcher() {
// 	const {value: isDark, toggle} = useToggle(false);

// 	return (
// 		<div>
// 			<p>{isDark ? "Dark Mode" : "Light mode"}</p>
// 			<button onClick={toggle}>Toggle</button>
// 		</div>
// 	)

// }



export default ThemeSwitcher;