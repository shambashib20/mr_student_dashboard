
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PaymentDetails from './pages/PaymentDetails'
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payment-details" element={<PaymentDetails />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
