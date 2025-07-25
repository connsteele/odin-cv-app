import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/App.css";
import AppForm from './components/AppForm';

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppForm />
    </StrictMode>
);
