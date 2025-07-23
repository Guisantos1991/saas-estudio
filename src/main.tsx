import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import SetClient from './pages/setClient'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SetClient />
    </BrowserRouter>
  </StrictMode>,
)
