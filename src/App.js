import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './api/requests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl ={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row
        title="Trending Now"
        id = "TN"
        fetchUrl = {requests.fetchTrending}
      />

      <Row
        title="Trending Now"
        id = "CM"
        fetchUrl = {requests.fetchComedyMovies}
      />

      <Row
        title="Trending Now"
        id = "AM"
        fetchUrl = {requests.fetchActionMovies}
      />

      <Row
        title="Trending Now"
        id = "RM"
        fetchUrl = {requests.fetchRomanceMovies}
      />

      <Footer/>



    </div>
  );
}

export default App;
