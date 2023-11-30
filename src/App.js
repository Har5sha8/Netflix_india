import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import request from './request'
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  console.log(request.fetchTrending);
  return (
    <div>
      <Nav/>
     
      <Banner fetchurl={request. fetchNetflixOriginals}/>
      <Row title="NetflixOrginals" fetchurl={request. fetchNetflixOriginals}/>
      
      <Row title="TopRated" fetchurl={request. fetchTopRated}/>
      <Row title="Trending" fetchurl={request. fetchTrending}/>
      <Row title="Action" fetchurl={request.fetchActionMovies }/>
      <Row title="comedy" fetchurl={request.fetchComedyMovies }/>
      <Row title="Horror" fetchurl={request. fetchHorrorMovies }/>
      <Row title="RomanceMovies" fetchurl={request.fetchRomanceMovies }/>
      <Row title="Documenteries" fetchurl={request.fetchDocumentaries}/>
      
    </div>
   
  );
}

export default App;
