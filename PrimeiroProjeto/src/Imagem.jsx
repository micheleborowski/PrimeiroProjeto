import PropTypes from "prop-types";

const Imagem = ({src}) => {
    return <img src={src}></img>
}

Imagem.propTypes = {
    src : PropTypes.string
}

export default Imagem;