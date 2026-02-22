import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login/index.tsx'

createRoot(document.getElementById('root')!).render(
    <GoogleOAuthProvider clientId="891102577285-r9fi9hb9vde3ipg31tlapuq9eu0c864r.apps.googleusercontent.com">
      <StrictMode>
        <BrowserRouter>
        <Routes >
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </GoogleOAuthProvider>,
)
