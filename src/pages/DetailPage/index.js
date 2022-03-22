import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetail.css';

export default function DetailPage({}) {

  let {movieID} = useParams();
  const [movie, setMovie] = useState({});

  useEffect(()=>{
    async function fetchData() {
      const request = await axios.get(`/movie/${movieID}`);
      console.log('one request', request)
      setMovie(request.data);
    }
    fetchData();

  }, [movieID])
  if(movie===null) return <div>...loading</div>
  return (
    <div
      className='modal__content'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize:"cover",
      }}
    >
      <p className='modal__details'>
          <span className='modal__user-perc'>100% for you  </span>
          {movie.release_date ? movie.release_date : movie.first_air_date}
      </p>

      <h2 className='modal__title'>{movie.title? movie.title : movie.name}</h2>
      <p className='modal_overview'> 평점 : {movie.vote_average}</p>
      <p className='modal_overview'>{movie.overview}</p>
      
    </div>
  )
}
