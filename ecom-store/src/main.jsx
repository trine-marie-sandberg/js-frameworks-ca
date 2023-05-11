import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Theme from './styles/theme.jsx'
import GlobalStyle from './styles/global.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle/>
      <App />
    </Theme>
  </React.StrictMode>,
)
