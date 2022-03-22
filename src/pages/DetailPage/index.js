import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {

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
    <section>
      <img
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="modal__poster-img"
      />
    </section>
  )
}
