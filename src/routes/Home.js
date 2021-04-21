import axios from "axios";
import React from "react";
import Movie from "../components/Movie";
import "./Home.css"

class Home extends React.Component{

  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    // 구조 분해 할당
    const {
      data: {
        data: {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log(movies);
    //this.setState({movies:movies}); -> 아래와 일치. key, property 변수명이 같을 경우 축약해서 사용 가능
    this.setState({ movies, isLoading: false });
  }
  
 componentDidMount(){
    /**
     * axios -> role)fetch
     * axios.get(string: url) -> 속도가 느리기 때문에 componentDidMount한테 시간이 좀 걸릴 수 있다. 기다려야 한다라고 전해야 한다.
     *  방법
     *    1. async를 componentDidMount 앞에 붙여서 비동기화로 처리하게 만든다.
     *    2. 외부에서 함수를 만들어 호출
     *        async: 기다려야해?
     *        await: 이 뒤에걸 기다려야해!
     *        --> 즉, axious가 끝날 때 까지 기다린다!
     */ 
    
    this.getMovies();
    
  }

  render(){

    //const isLoading = this.state.isLoading;
    const {isLoading, movies} = this.state; // 구조 분해 할당

    return (
      <section className="container">
        {isLoading 
          ? <div className="loader">
              <span className="loader__text">Loading...</span>
            </div> 
          : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />            
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default Home;