import './App.css'
import { Route, Routes } from 'react-router-dom'
import Balance from './pages/Balance'
import Register from './pages/Register'
import Login from './pages/Login'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import About from './pages/About'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<About />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/services' element={<Services />} />
				<Route path='/balance' element={<Balance />} />
			</Routes>
		</>
	)
}

export default App
