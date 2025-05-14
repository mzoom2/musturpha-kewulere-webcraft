
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

// Add debugging information
console.log('Application starting...');
console.log('Environment:', import.meta.env);

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log('Root element found, mounting app');
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found!');
}
