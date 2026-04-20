import useToggle from "./hooks";
import useLocalStorage from "./LocalStorageTest";


function ThemeSwitcher() {
	const [isDark, setIsDark] = useLocalStorage("theme-dark", false);

	return (
		<button onClick={() => setIsDark((prev) => !prev)}>
			{isDark ? "Dark" : "Light"}
		</button>
	);
}



export default ThemeSwitcher;