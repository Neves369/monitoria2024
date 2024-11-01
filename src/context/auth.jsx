import { createContext, useState } from "react"; 

// Cria o contexto de autenticação, 
// que será utilizado para compartilhar 
// o estado e funções de autenticação entre os componentes.
const AuthContext = createContext({}); 

// Define o componente AuthProvider, que envolverá a aplicação 
// para fornecer o contexto de autenticação a seus componentes filhos.
export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(undefined);
    const [signedUser, setSignedUser] = useState(false); 

    // Função que gerencia o login do usuário.
    const signIn = (usuario) => { 
        setUser(usuario);
        setSignedUser(true);
    }

    return (
        <AuthContext.Provider
            value={{ 
                signed: signedUser, 
                signIn,
                user                
            }}
        >   
            {/* Renderiza os componentes filhos que terão acesso ao contexto de autenticação. */}
            {children} 
        </AuthContext.Provider>
    )
}

export default AuthContext;