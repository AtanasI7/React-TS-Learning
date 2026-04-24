import { useEffect, useState } from "react";

function SearchBox() {
	const [search, setSearch] = useState("");
	const debouncedSearch = useDebounce(search, 500);

	return (
		<div>
			<input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search..."
			/>
			<p>Debounced value: {debouncedSearch}</p>
		</div>
	);
}


function useDebounce<T>(value: T, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(timeoutId);
		}
	}, [value, delay]);

	return debouncedValue;
}

export default SearchBox;