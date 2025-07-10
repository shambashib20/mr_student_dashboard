// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/easy-responsive-tabs.css';

import './assets/css/fancybox.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './styles/style.css'

// JS imports (for libraries that require jQuery)
import 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'owl.carousel'
import './assets/js/custom.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
