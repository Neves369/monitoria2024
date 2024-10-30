import { useState } from "react";
import CustomButton from "../../components/button";
import CustomInput from "../../components/inputs/CustomInput";
import PasswordInput from "../../components/inputs/PasswordInput";

/**
 * Componente de login que lida com a autenticação do usuário
 */
const  Login = () => {

  const [email, setEmail] = useState(""); // Estado para armazenar o email do usuário
  const [senha, setSenha] = useState(""); // Estado para armazenar a senha do usuário
  const [erro, setErro] = useState(""); // Estado para armazenar mensagens de erro


   /**
   * Função que lida com o envio do formulário de login
   * @param {Event} e - Evento de envio do formulário
   */
  const logar = (e) =>{
    e.preventDefault(); // Previne o comportamento padrão do formulário

    if(email.length == 0){
      setErro("Email é obrigatório!")
    }
    else{
      setErro("")
    }
    
  }

  return (
    <div className="card">
      <form className="form" onSubmit={logar}>
        <h2>Login</h2>
        <CustomInput
          type="email"
          placeholder="Email"
          value={email}
          required={false}
          action={setEmail}
        />
        <PasswordInput
           placeholder="Senha"
           value={senha}
           required={true}
           action={setSenha}
        />
        {erro && <p style={{color: "red"}}>{erro}</p>}
        <CustomButton type="submit" />
      </form>
    </div>
  )
}
export default Login;
