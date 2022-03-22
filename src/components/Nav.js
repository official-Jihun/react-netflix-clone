import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

export default function Nav() {

    const [ show, setShow ] = useState(false);
    const [ searchValue, setSearchValue ] = useState("");
    const navigate = useNavigate();

    const handelChange=(e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    }


    useEffect(()=>{
        window.addEventListener("scroll", ()=> {
            if(window.scrollY > 50){
                setShow(true);
            
            }
            else{
                setShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", ()=>{});
        };
    }, []);

    return (
        <nav className={`nav ${show && "nav_black"}`}>
            <img
                alt ="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                className='nav_logo'
                onClick={()=>navigate('/')}
            />

            <input  value = {searchValue} onChange = {handelChange} className="nav_input" type="text" placeholder='영화를 검색해 주세요'/>
            <img
                alt="User logged"
                src="https://occ-0-395-2218.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_cjFqekMWlVv9AS6vI54p7W5uxkdnDz0RZ_BWg2XRBOMNYXnJRhtOnpMappsaT2-4TP8mjyaBTNLX-mLEJHl8GIfn_.png?r=fcc"
                className='nav_avatar'
            />

        </nav>
    )
}
