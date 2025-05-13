
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove the custom cursor class, no longer needed
createRoot(document.getElementById("root")!).render(<App />);
