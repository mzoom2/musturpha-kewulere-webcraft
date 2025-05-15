
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add console logs for debugging
console.log("Application starting...");
console.log("Base URL:", document.baseURI);

// Add image preloading to debug image issues
const preloadImages = () => {
  const imagePaths = [
    './lovable-uploads/a96231c9-263a-44b7-98bf-2509bdccdd67.png',
    './lovable-uploads/791f0c56-003c-4e07-8d84-648bb0ebe3c9.png'
  ];
  
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
    img.onload = () => console.log(`Image preloaded successfully: ${path}`);
    img.onerror = (e) => console.error(`Failed to preload image: ${path}`, e);
  });
};

// Preload images
preloadImages();

// Mount the application
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found!");
}
