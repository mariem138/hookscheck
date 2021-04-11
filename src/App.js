import React, { useState } from "react";
import './App.css';
import MovieList from "./MovieList";
import NavbarApp from "./NavbarApp";
import AddMovie from "./AddMovie";


function App() {
  const [search, setSearch] = useState("")
  const [star, setStar] = useState(1)
  const [movies, setMovies] = useState([
    {
      title: "Law Abiding Citizen",
      description:"Clyde Shelton is desperate to exact revenge on those who killed his family as well as on the police officials, including assistant DA Nick Rice, who could not guarantee an appropriate sentence.",
      img:"https://www.thenile.com.au/movies/law-abiding-citizen/9398710852493.jpg",
      rating: 5
      
    },
  
    
    {
      img: "https://www.imdb.com/title/tt5034838/mediaviewer/rm4176402177.jpg",
      title: "Godzilla VS Kong",
      description: "The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another - the fearsome Godzilla and the mighty Kong - with humanity caught in the balance.",
      rating: 4
    },
    {
      img: "https://www.imdb.com/title/tt3783958/mediaviewer/rm3967749632.jpg",
      title: "La La Land",
      description: "Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
      rating: 1
    },
    {
      img: "https://www.imdb.com/title/tt1587310/mediaviewer/rm3512454912.jpg",
      title: "Maleficent",
      description: "Maleficent is a kind-hearted fairy, who is deceived by the love of her life, Stefan. Soon, she places a curse on his daughter, Aurora, in order to exact revenge.",
      rating: 2
    },
    { 
      img: "https://www.imdb.com/title/tt0480249/mediaviewer/rm2203650560.jpg",
      title:"I Am Legend",
      description: "Robert Neville, a scientist, is the last human survivor of a plague in the whole of New York. He attempts to find a way to reverse the effects of the man-made virus by using his own immune blood.",
      rating: 3
    }
  ])
  let getSearch = (text) => {
    setSearch(text)
  }
  let getStar = (star) => {
    setStar(star)
  }
  
  return (
    <div className="App">
      <NavbarApp getSearch={getSearch} getStar={getStar} star={star} />
      <MovieList movies={movies.filter(el => el.rating >= star && el.title.toLowerCase().includes(search.toLowerCase()))} />
      <AddMovie addingFilm={setMovies} movies={movies} />
    </div>
  );
}

export default App;
