import './App.css';
import React, { useState } from 'react';
import AddMovie from './components/AddMovie'
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {

  const [movie, setMovie] = useState([
    {title : "Avengers Endgame",
    rate : 5,
    posterUrl : "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    description : "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
  Id :7
  },
  {title : "Avatar",
  rate : 3,
    posterUrl : "https://i.pinimg.com/originals/f9/9d/8c/f99d8c1aeb172d05353d9ab3841f6af2.jpg",
    description : "Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.",
   Id : 6
},
  {title : "The Hobbit",
  rate : 2,
  posterUrl : "https://m.media-amazon.com/images/I/71iOSKkZvcL._AC_SY879_.jpg",
  description : "Bilbo Baggins, a hobbit, and his companions face great dangers on their journey to Laketown. Soon, they reach the Lonely Mountain, where Bilbo comes face-to-face with the fearsome dragon Smaug."
, Id : 5},
{title : "Catch me if you can",
  rate : 4,
  posterUrl : "https://images-na.ssl-images-amazon.com/images/I/81V%2Bb69u3xL._AC_SL1500_.jpg",
  description : "Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl, becomes obsessed with tracking down the con man. But Frank not only eludes capture, he revels in the pursuit."
, Id :4},
{title : "Law Abiding Citizen",
  rate : 5,
  posterUrl : "https://images-na.ssl-images-amazon.com/images/I/91P8PtNZzfS._SL1500_.jpg",
  description : "Clyde Shelton is desperate to exact revenge on those who killed his family as well as on the police officials, including assistant DA Nick Rice, who could not guarantee an appropriate sentence."
, Id :3},
{title : "Up",
  rate : 1,
  posterUrl : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347235065l/8961831.jpg",
  description : "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination."
,Id :2},
{title : "Spiritted away",
  rate : 5,
  posterUrl : "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  description : "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park."
 ,Id :1},
{title : "Riddick",
  rate : 1,
  posterUrl : "https://images-na.ssl-images-amazon.com/images/I/71J21ePe%2BsL._AC_SL1138_.jpg",
  description : "Riddick finds himself on a sun-scorched planet and tries hard to fight for survival. He stands up against a race of alien predators, more lethal than any human race he has ever encountered."
 , Id : 8},
  ])

  const [inputSearch, setInputSearch] = useState('');
  const [inputSearchRate, setInputSearchRate] = useState(0);

  const handleAdd = (a,b,c,d) => {
    setMovie([...movie, {title : a ,  rate : b , posterUrl : c , description : d , Id : Math.random()}]);
  }
  const handleDelete =(movieId)=>{
    setMovie(movie.filter((x)=>(x.Id != movieId)))
  }
  


  return (
    <div className="App">
      <h1>Free Movies</h1>
      <div className="top-search">
        <AddMovie handleAdd={handleAdd} />
        <Filter setInputSearchRate={setInputSearchRate} setInputSearch={setInputSearch}/>
      </div>
      <MovieList  inputSearch={inputSearch} movie={movie} inputSearchRate={inputSearchRate} handleDelete={handleDelete} setMovie={setMovie} />
    </div>
  );
}

export default App;
