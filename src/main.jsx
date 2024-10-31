import React from 'react'
import './styles/index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'

/**
 * Cria um elemento root no DOM para renderizar o componente App
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * Renderiza o componente App dentro do elemento root
 */
root.render(
  /**
   * Componente React.StrictMode que habilita verificações de erros e warnings
   * para ajudar a detectar bugs e melhorar a experiência do usuário
   */
  <React.StrictMode>
     {/* Componente App que representa a aplicação principal */}
    <App />
  </React.StrictMode>,
);