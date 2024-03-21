import React from 'react'
import './App.css'
import { FaReact } from 'react-icons/fa'

function App() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
			<h1>Hello, React!</h1>
			<FaReact size={30} color="lightblue" />
		</div>
	)
}

export default App
