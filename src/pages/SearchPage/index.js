import axios from '../../api/axios';
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useDebounce from "../../hooks/useDebounce" ;
import './SearchPage.css';

export default function SearchPage() {

    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const useQuery = () => {
      return new URLSearchParams(useLocation().search);
    } 
    let query = useQuery();
    // const searchTerm = query.get("q");
    const searchTerm = useDebounce(query.get("q"), 500);

    useEffect(() =>{
      if(searchTerm){
        fetchSearchMovie(searchTerm);
      }
    }, [searchTerm]);

    const fetchSearchMovie = async (searchTerm) => {
      try {
        const request = await axios.get(
          `/search/multi?include_adult=false&query=${searchTerm}`
        );
        console.log('request', request);
        setSearchResults(request.data.results);
      }
      catch(error) {
        console.log("error",error);
      }

    }
    
    const renderSearchResults = () =>{
      return searchResults.length > 0 ? (
        <section className='search-container'>
          {searchResults.map((movie) => {
            if(movie.backdrop_path !== null && movie.media_type !=="person"){
              const movieImageURL =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <div className='movie'>
                  <div className='movie__column-poster'
                  onClick={()=>navigate(`/${movie.id}`)}>
                    <img src={movieImageURL} alt="No IMAGE" className=",movie__poster"/>
                  </div>
                </div>
              )
            }
          })}
        </section>
      ):
      (
        <section className='no-results'>
          <div className='no-results__text'>
            <p>
              Your search for "{searchTerm}" did not have any matches.
            </p>
            <p>Suggestions : </p>
            <ul>
              <li>Try different keywords</li>
              <li>Change Language</li>
              <li>Reload page</li>
            </ul>

          </div>
        </section>
      )
    }

    

    return (
      // <div>d</div>
      renderSearchResults()
    )
}
