import {useContext} from 'react';
import AuthContext from "../../context/auth";
import { useHistory } from 'react-router-dom';


const Dashboard = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext); 

  return (
    <div className="dashboard">
      {/* Topbar com mensagem de boas-vindas e botão de sair */}
      <div className="topbar">
        <h2>Bem-vindo {user.nome}</h2>
        <button className="logout-button" onClick={() => { history.push("/"); }}>
          Sair
        </button>
      </div>
      {/* Conteúdo principal do dashboard */}
      <div className="card-dashboard">
        
      </div>
    </div>
  );
}

export default Dashboard;
