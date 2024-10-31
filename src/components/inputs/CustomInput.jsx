import PropTypes from 'prop-types';

/**
 * Componente de input customizado
 * @param {Object} props - Propriedades para configurar o input
 */
const CustomInput = (props) => {
    return (
        // Renderiza um input com todas as propriedades passadas
        <input {...props} />
    );
}

// Validação dos tipos das propriedades esperadas para o input
CustomInput.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default CustomInput;
