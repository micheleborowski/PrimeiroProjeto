import PropTypes from "prop-types";
import Imagem from './Imagem';
import Favoritar from "./imagens/favoritar.png";
import Desfavoritar from "./imagens/desfavoritar.png"



const Book = ({ id, title, authors, image, publishedDate, favorited, favoritar}) => {
  const handleClick = () => {
    favoritar(id);
 }
 
  return (
    <div id="box">
      <div id="up">
        <Imagem src={image}/>
        <button onClick={handleClick} > {favorited ? <img class="botao" src={Desfavoritar}></img> : <img class="botao" src={Favoritar}></img>} </button>
      </div>
      <p id="title">{title}</p>
      <div id="down">
        {authors.map((author)=>{
          return <p id="author">{author}</p>
        })}
        <p id="publishedDate">{publishedDate}</p>
        </div>
    </div>
  )
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(
  PropTypes.string.isRequired),
  image : PropTypes.string.isRequired,
  publishedDate : PropTypes.string.isRequired,
  favorited : PropTypes.bool.isRequired,
  favoritar : PropTypes.func.isRequired
};

export default Book;



// add um id para o livro (criar prop) |OK
// add botão favoritar | OK
// criar um array de favoritos 
// ao clicar no botão o livro é add o id do livro no array de favoritos.
// passar a prop favorited para o componente Book. 
// O controle de quais livros estão favoritados deve ser controlado com useState.