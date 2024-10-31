/**
 * Botão reutilizável para o formulário de login
 * @param {Object} props - Contém as propriedades do botão
 * @param {string} props.submit - Define o tipo do botão (ex.: "submit" para envio)
 */
const CustomButton = (props) => {
    return (
        // Botão com tipo configurável e texto "Logar"
        <button type={props.submit}>
            Logar
        </button>
    );
}

export default CustomButton;
