import Book from './Book'
import { useState, useEffect} from "react";
import "./style.css";

const books = [
	{
		id: 1,
    title: "Harry Potter e o prisioneiro de Azkaban",
    authors: [
      "J.K. Rowling"
    ],
    image: "https://books.google.com/books/content?id=qDYQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2015",
  },
	{
		id: 2,
    title: "Os Sete Maridos de Evelyn Hugo",
    authors: [
      "Taylor Jenkins Reid"
    ],
    image: "http://books.google.com/books/content?id=PJZWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2021",
  },
  {
		id: 3,
    title: "Mulherzinhas",
    authors: [
      "Louisa May Alcott"
    ],
    image: "https://books.google.com/books/content?id=pu29DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2020",
  },
  {
		id: 4,
    title: "Orgulho e Preconceito",
    authors: [
      "Jane Austen"
    ],
    image: "https://books.google.com/books/content?id=UGIC7N0Op2MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2010",
  },
  {
		id: 5,
    title: "O mundo assombrado pelos demônios",
    authors: [
      "Carl Sagan"
    ],
    image: "https://books.google.com/books/content?id=8ePUBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2006",
  },
]

function App() {

  const [favoritos, setfavoritos] = useState([]);

  useEffect(() => {
    console.log(favoritos)
 }, [favoritos])
  
  function favoritar(id){
    if(favoritos.includes(id)){
     const listaFavoritos = favoritos.filter((favoritoId)=> favoritoId !== id)
     console.log({listaFavoritos});
     setfavoritos(listaFavoritos)
    } else{
      setfavoritos([...favoritos, id]);
    }
  }

  return (
    books.map((bookItem)=>{
      return(
      <div>
      <Book 
      id={bookItem.id}
      title={bookItem.title} 
      authors={bookItem.authors} 
      image={bookItem.image} 
      publishedDate={bookItem.publishedDate} 
      favorited={favoritos.includes(bookItem.id)} 
      favoritar={favoritar}/>
      </div>
      )
    })
  )
}


export default App
