import useToggle from "./hooks";
import useLocalStorage from "./LocalStorageTest";


function ThemeSwitcher() {
  const [isDark, setIsDark] = useLocalStorage("theme-dark", false);

  return (
    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? "Dark" : "Light"}
    </button>
  );
}

// function ThemeSwitcher() {
//     const {value: isDark, toggle} = useToggle(false);

//     return (
//         <div>
//             <p>{isDark ? "Dark mode" : "Light mode"}</p>
//             <button onClick={toggle}>Toggle</button>
//         </div>
//     );
// }

export default ThemeSwitcher;