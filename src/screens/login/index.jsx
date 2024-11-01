import { useContext} from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/auth";
import { useHistory } from "react-router-dom";
import CustomButton from "../../components/button";
import CustomInput from "../../components/inputs/CustomInput";
import PasswordInput from "../../components/inputs/PasswordInput";

/**
 * Componente de login que lida com a autenticação do usuário
 */
const  Login = () => {
  // o useHistory que permite redirecionar o usuário para outras rotas da aplicação.
  const history = useHistory(); 

  // Usa o hook useContext para acessar o contexto de autenticação (AuthContext), 
  // que contém a função signIn.
  const { signIn } = useContext(AuthContext); 


  // Inicializa o hook useForm do React Hook Form
  const { 
    register,             // Função para registrar inputs com validação
    handleSubmit,         // Função que lida com o envio do formulário
    formState: { errors } // Objeto que armazena os erros de validação dos campos
  } = useForm();

   /**
   * Função que lida com o envio do formulário de login
   * @param {Event} e - Evento de envio do formulário
   */
  const logar = (data) =>{

    // usuário criado para simulação
    const usuario = {
      nome: "Usuário Teste",
      email: data.email,
    }

    signIn(usuario);
    history.push("/dashboard")
    
  }

  return (
    <div className="card">
      <form className="form" onSubmit={handleSubmit(logar)}>
        <h2>Login</h2>
        {/* Nosso componente de input */}
        <CustomInput
          name={"email"}
          type="email"
          placeholder="Email"
          register={ {...register("email", {
            // required: true,
          })}}
          
        />
        {/* renderização condicional de erro */}
        {errors.email && <p className="error">{"Email é obrigatório!"}</p>}

         {/* componente de senha customizado*/}
        <PasswordInput
           name={"senha"}
           placeholder="Senha"
           register={ {...register("senha", {
            // required: true,
          })}}
        />
         {/* renderização condicional de erro */}
        {errors.senha && <p className="error">{"Senha é obrigatória!"}</p>}

        <CustomButton type="submit" />
      </form>
    </div>
  )
}
export default Login;
