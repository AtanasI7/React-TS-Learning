import { useState } from 'react'
import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher'
import { Route, Routes } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/HomePage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />}/>
				<Route path='switcher' element={<ThemeSwitcher />} />

			</Route>
		</Routes>
	);
}

export default App;
