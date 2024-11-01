import React from 'react'
import { useHistory } from 'react-router-dom';

const  Dashboard = () => {

 const history = useHistory();

  return (
    <div className="card">
        <h2>Dashboard</h2>
        <button onClick={()=>{history.push("/")}}>Sair</button>
    </div>
  )
}

export default Dashboard;
