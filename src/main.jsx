import { StrictMode } from 'react' // usado para ativar a verificação de problemas no código durante o desenvolvimento
import { createRoot } from 'react-dom/client' // usado para definir onde a aplicação será renderizada no HTML
import './index.css' // importa a estilização assim como o style.css do projeto
import App from './App.jsx' // importa o componente principal da aplicação

// .render() renderiza o componente na pagina html, dentro do elemento com id 'root', que é definido no index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*  renderiza o componente principal, dentro do StrictMode, para ativar a verificação de problemas no código durante o desenvolvimento */}
    <App />
  </StrictMode>,
)
