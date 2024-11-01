import React from 'react'
import { useHistory } from 'react-router-dom';

const Unauthorized = () => {

 const history = useHistory();

  return (
    <div className="card">
        <h2>Acesso não autorizado!</h2>
        <button onClick={()=>{history.push("/")}}>Logar</button>
    </div>
  )
}

export default Unauthorized;
