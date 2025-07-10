
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes here like:
            <Route path="/notice" element={<Notice />} />
        */}
        </Routes>
      </Router>
    </>
  )
}

export default App
