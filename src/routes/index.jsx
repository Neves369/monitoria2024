import { useContext } from "react";
import Login from "../screens/login";               
import AuthContext from "../context/auth";
import Dashboard from "../screens/dashboard";       
import Unauthorized from "../screens/unauthorized"; 
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom"; 

// Define o componente principal de controle de rotas
const RoutesController = () => { 

    const { signed } = useContext(AuthContext);

    // Componente para rotas privadas.
    const PrivateRoute = ({ path, component }) => {
         

        return (
            signed? 
                // Se o usuário está autenticado, renderiza a rota privada.
                <Route path={path} exact component={component} /> 
            : 
                // Se o usuário não, redireciona para a página de não autorizado.
                <Redirect to="/404" /> 
        );
    }

    return (
        // Envolve o sistema de rotas com o BrowserRouter para possibilitar a navegação.
        <BrowserRouter> 
            {/* O Switch garante que apenas uma rota seja renderizada de cada vez. */}
            <Switch>
                {/* Rota pública para a página de login. */}
                <Route path="/" exact component={Login} />
                {/* Rota pública para a página de acesso não autorizado. */}
                <Route path="/404" exact component={Unauthorized} /> 
                {/* Rota privada para o dashboard. */}     
                <PrivateRoute path="/dashboard" component={Dashboard} />  
            </Switch>
        </BrowserRouter>
    )
}

export default RoutesController;
