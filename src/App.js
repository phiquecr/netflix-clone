import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import Logo from './logo.png';



class Netflix extends Component {
  state = {

    movies: [],
    shows: [],
    images: [],
    date: []
    
  }

  async componentDidMount(){


    const responseMovies = await axios.get(`${process.env.REACT_APP_API}/movies`);
    console.log(responseMovies.data);

    const filmes = responseMovies.data.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      movies: responseMovies.data
    })

    this.setState({
      images: responseMovies.data.poster_path
    });





    
    const responseShows = await axios.get(`${process.env.REACT_APP_API}/shows`);
    console.log(responseShows.data);

    const series = responseShows.data.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      shows: responseShows.data
    })

    this.setState({
      images: responseMovies.data.poster_path
    });






    

  }

     

  
  


  render() {
    return(
      <div>
        <header>
            <img className="icon_logoNetflix" src={Logo} alt="Logo Netflix" />
        </header>
        <h1 className="titleIndicator">Filmes</h1>
        <div className="box_films">
          {this.state.movies.map((item, index) => (
            <div className="box_content" key={index}>
              <a href=""><img className="netflixImages" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/></a>
              <p className="releaseDate_now">{item.release_date}</p>
              <p className="netflixTitles">{item.title}</p>
              
            </div>
          ))}
        </div>
        <h1 className="titleIndicator">Series</h1>
        <div className="box_series">
          {this.state.shows.map((item, index) => (
            <div className="box_content" key={index}>
              <a href=""><img className="netflixImages" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/></a>
              <p className="releaseDate_now">{item.first_air_date}</p>
              <p className="netflixTitles">{item.original_name}</p>
            </div>
          ))}
        </div>
      </div>         
    )
  }
}

export default Netflix;
