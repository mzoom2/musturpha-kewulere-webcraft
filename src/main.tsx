
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

// Add debugging information
console.log('Application starting...');
console.log('Environment:', import.meta.env);

// Add image path debugging
const profileImagePath = '/upload/a96231c9-263a-44b7-98bf-2509bdccdd67.png';
const faviconPath = '/upload/791f0c56-003c-4e07-8d84-648bb0ebe3c9.png';
console.log('Profile image path:', profileImagePath);
console.log('Favicon path:', faviconPath);

// Check if running on GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io');
console.log('Is GitHub Pages:', isGitHubPages);

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
