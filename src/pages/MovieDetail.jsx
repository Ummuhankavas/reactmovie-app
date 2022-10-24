import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';



const MovieDetail = () => {
  const {id} = useParams();
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = 'https://image.tmdb.org/t/p/w1280';
  const defaultImage =
    'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

    useEffect(() => {
      axios
      .get(movieDetailBaseUrl)
      .then((res)=>console.log(res.data))
      .catch((err)=> console.log(err));
    }, [movieDetailBaseUrl]);
    

  return (
    <div>MovieDetail</div>
  );
};

export default MovieDetail;