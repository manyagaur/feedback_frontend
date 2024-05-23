import { useState } from 'react'
import Form from './components/Form';
import './App.css'
import Success from './components/Success';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App;
