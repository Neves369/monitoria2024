import { useState } from "react";
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash } from "react-icons/fa";

/**
 * Componente de input para senha com opção de visibilidade
 * @param {Object} props - Propriedades do input de senha
 */
const PasswordInput = (props) => {
    // Controla a visibilidade da senha
    const [visible, setVisible] = useState(false);

    return (
        <div className="input-div">
            {/* Input de senha; troca tipo entre 'password' e 'text' baseado no estado */}
            <input 
                {...props}
                {...props.register(props.name, {
                    required: true,
                  })}
                style={{ flex: 6 }}
                type={visible ? 'text' : 'password'}
            />
            {/* Ícone para alternar visibilidade */}
            <span  
                className="button-show-password" 
                onClick={() => setVisible(!visible)}
            >
                {visible ? <FaEye /> : <FaEyeSlash />}
            </span>
        </div>
    );
}

// Validação dos tipos esperados das propriedades
PasswordInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default PasswordInput;
