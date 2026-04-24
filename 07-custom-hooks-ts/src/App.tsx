import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher'
import { Route, Routes } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/HomePage';
import LoginPage from './components/LoginPage';
import AuthPanel from './components/AuthPanel';
import UsersPage from './components/ApiData';
import SearchBox from './components/DebounceTest';
import Counter from './components/CounterReducer';
import ContextTest from './components/ContextTest';


function App() {

	return (
		<Routes>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path='switcher' element={<ThemeSwitcher />} />
				<Route path='login' element={<LoginPage />} />
				<Route path="reallogin" element={<AuthPanel />} />
				<Route path="users" element={<UsersPage />} />
				<Route path='debounceSearch' element={<SearchBox />} />
				<Route path='counter' element={<Counter />} />
				<Route path='contextTest' element={<ContextTest />} />
			</Route>
		</Routes >

	);
}

export default App;
