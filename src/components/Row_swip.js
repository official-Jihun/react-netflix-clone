import React, { useEffect , useState } from 'react';
import axios from '../api/axios';
import MovieModal from './MovieModal';
import './Row.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay])


const Row = ({ isLargeRow, title, id, fetchUrl}) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({})

    useEffect(() => {
        fetchMovieData();
    }, [])

    const fetchMovieData = async() => {
        const request = await axios.get(fetchUrl);
        // console.log('request', request);
        setMovies(request.data.results);
    }

    const handelClick = (movie) =>{
        setModalOpen(true);
        setMovieSelected(movie);
        
    }
    
    return (
        <section  className="row">
            <h2>!! {title}</h2>
            <div className='slider'>
            
                {/* <div className='slider__arrow-left'>
                    <span className='arrow'
                        onClick={()=> {
                            document.getElementById(id).scrollLeft -= window.innerWidth - 80
                        }}
                    >{"<"}</span>
                </div> */}
                <Swiper 
                    navigation
                    id={id} 
                    className="row__posters"
                >
                    {movies.map(movie =>(
                        <SwiperSlide 
                            key={movie.id}
                        >
                            <img    
                                key={movie.id}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                                onClick={()=> handelClick(movie)}
                            />
                        </SwiperSlide>
                    ))}
                    
                
                </Swiper>
                {/* <div className='slider__arrow-right'
                    onClick={()=> {
                        document.getElementById(id).scrollLeft += window.innerWidth - 80
                    }}
                >
                    <span className='arrow'>{">"}</span>
                </div> */}
            </div>
            {
                modalOpen && (
                    <MovieModal{...movieSelected} setModalOpen={setModalOpen}/>
                )
            }
        </section>
    )
}

export default Row;
