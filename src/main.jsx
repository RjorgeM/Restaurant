import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa el archivo CSS de Tailwind
import AppRouter from './router'; // Asegúrate de que esta importación sea correcta

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter /> {/* Llamamos al enrutador */}
  </React.StrictMode>
);
