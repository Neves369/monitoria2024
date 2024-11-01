import RoutesController from "./routes";
import { AuthProvider } from "./context/auth";

function App() {
 /**
 * Retorna o elemento JSX que representa o componente App
 */
  return (
    /*
    * encapsula a aplicação dentro do contexto de autenticação. 
    * permite que todos os componentes filhos, 
    * como o RoutesController e seus descendentes,
    * tenham acesso ao contexto de autenticação
    */
    <AuthProvider>
      <RoutesController/>
    </AuthProvider>
  )
}




export default App // Exportando o componente App como exportação padrão
