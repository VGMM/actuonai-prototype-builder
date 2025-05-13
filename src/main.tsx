
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add class to hide cursor on non-touch devices
if (window.matchMedia('(pointer: fine)').matches) {
  document.documentElement.classList.add('custom-cursor');
}

createRoot(document.getElementById("root")!).render(<App />);
