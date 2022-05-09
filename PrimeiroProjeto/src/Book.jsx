import PropTypes from "prop-types";
import Imagem from './Imagem'


const Book = ({ id, title, authors, image, publishedDate, favorited}) => {
  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      {authors.map((author)=>{
        return <p>{author}</p>
      })}
      <Imagem src={image}/>
      <p>{publishedDate}</p>
      <button onClick={favoritar}> favoritar</button>
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
  favorited : PropTypes.bool.isRequired
};

export default Book;



// add um id para o livro (criar prop) |OK
// add botão favoritar | OK
// criar um array de favoritos 
// ao clicar no botão o livro é add o id do livro no array de favoritos.
// passar a prop favorited para o componente Book. 
// O controle de quais livros estão favoritados deve ser controlado com useState.