
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PaymentDetails from './pages/PaymentDetails'
import NoticesPage from './pages/NoticesPage'
import IdCardPage from './pages/IdCardPage'
import Certificate from './pages/Certificate'
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/id-card" element={<IdCardPage />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
