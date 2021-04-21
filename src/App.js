/////////////////////////////////////////////////////////////////////////////
/** 
 *  #6 0 Getting Ready for the Router ~ 
 */
/////////////////////////////////////////////////////////////////////////////
import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App(){
  return(

    /**
     * 이 Navigation.js는 react-router-dom의 Link를 사용해 구현되었기 때문에
     * App.js에서 HashRouters 밖에서 사용 불가
     */

  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>);

  /*
    다중 컴포넌트 랜더링 예시

    <HashRouter>
      <Route path="/home">
        <h1>home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>home with Introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
    </HashRouter>
  */
  
}

export default App;


















/////////////////////////////////////////////////////////////////////////////
/** 
 *  #4 0 Fetching Movies from API ~ #5 0 Deploying to Github Pages
 * 다음 수업을 위해 아래 내용 주석 처리
 */
/////////////////////////////////////////////////////////////////////////////
/*
import axios from "axios";
import React from "react";
import Movie from "./components/Movie";
import "./App.css"

class App extends React.Component{

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
  /*  
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

export default App;















/////////////////////////////////////////////////////////////////////////////
/** 
 *  #3 3 Planning the Movie Component ~ .
 * 다음 수업을 위해 주석 처리
 */
/////////////////////////////////////////////////////////////////////////////
/*
import React from "react";

class App extends React.Component{

  state = {
    isLoading: true,
    movieState: []
  }

  // When component mounted
  componentDidMount(){
    //setTimeout(): delay function
    //setTimeout(func, 시간): 시간이 지나면 func 수행
    setTimeout(()=>{
      this.setState({isLoading: false});
    }, 6000);

  }

  render(){

    //const isLoading = this.state.isLoading;
    const {isLoading} = this.state; // 구조 분해 할당

    return (
      <div>{isLoading ? "Loading" : "We are Rready"}</div>
    );
  }
}

export default App;












/////////////////////////////////////////////////////////////////////////////
/** 
 * 다음 예제를 위해 아래 내용 전부 주석 처리
 *  #3 0 Class Components and State ~ #3 2 Component Life Cycle
 */
/////////////////////////////////////////////////////////////////////////////
/*
import React from "react";

class App extends React.Component{

  constructor(){
    super();
    console.log("I am construcotr");
  }

  state = {
    count: 0
  };

  add = (x,y) => {
    console.log("add");
    this.setState(current => ({count: current.count + 1}));
    //this.setState({count: this.state.count + 1}); --> 위와 동일
  };
  minus = () => {    
    console.log("minus");
    //this.state.count = -1;
    this.setState({count: this.state.count -1});
  };
  
  // mount
  componentDidMount(){
    console.log("I am componentDidMount --> component rendered");
  }

  // update
  componentDidUpdate(){
    console.log("I am componentDidUpdate --> I just updated");
  }

  // unmount
  componentWillUnmount(){
    alert("Good Bye");
  }


  render(){
    console.log("I am render");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={()=>this.add(5,7)} >Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;















/////////////////////////////////////////////////////////////////////////////
/** 
 * 다음 예제를 위해 아래 내용 전부 주석 처리
 *  0-0 ~ 2-4 (PropTypes)
 */
/////////////////////////////////////////////////////////////////////////////

/*
import React from "react";
import PropTypes from "prop-types";
// import Potato from "./Potato";

// 외부에서 가져온 데이터(객체가 들어있는 배열 타입)
const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304',
    rating: 4.3
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjky/MDAxNDkzMDIzMjY5MjY5.u5q3w1Cl1wjxJoRzSpczd_VT2rScn_zaDV5LfKVMa6Mg.Tz5B-6i_SYH4yydceeZT6bNwDs-P5srXOE2uCDQ_Disg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800',
    rating: 4.9
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://lh3.googleusercontent.com/proxy/M0Rs6d2AQd1NHkEM_23IsSL1eohn2rmW-KWWyD3UQHGGH3yIi7MXnUE4TQOLb51qGFJf0sVlKwSqnDLoxQVRBVjEMjiJmDK14GDo1tCUMzfvEQ',
    rating: 4.8
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2019/03/10/168d255254103ff54861098af10adfae1.jpg',
    rating: 4.7
  }
];

/*
function Food(props){
  return (
    <h1>I like {props.fav}</h1>
  )
}
  ---> 위와 같은 식에서 아래로 변경
        :  property 객체 내부의 값을 바로 꺼내 사용도 가능
           {fav} === props.fav
}*/

/*
function Food({name, picture, rating}){
  //console.log({fav});
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} width='100px' alt={name}></img>
    </div> 
  )
}

// 부모에서 넘어온 prop들 체크 --> 해당 데이터의 타입이 이래야 한다~ 라고 작성!
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number

  /*
    rating의 경우 부모에서 넘긴값은 숫자이기 때문에 propTypes에서 string으로 설정하면 아래와 같은 에러 발생
      ... -> index.js:1 Warning: Failed prop type: Invalid prop `rating` of type `number` supplied to `Food`, expected `string`.
    
    만약 부모가 보내는 prop의 값이 propTypes에 명시된 이름과 다르면 에러 발생   
    
    isRequired가 없는 경우: 해당 타입이거나 undefined까지도 괜찮다.
  */
/*};

/*
  function renderFood(dish){
    return <Food name={dish.name} picture={dish.image} />;
    // map에서 이 함수를 호출하면 react.element 객체를 가지고있는 배열이 리턴되어 브라우저에 뿌려진다.
    // 여기서는 Food Component
  }
*/
/*
function App() {
  return (
  <div>
      {/* {console.log(foodILike.map(renderFood))} *//*}*/
/*      {/* {foodILike.map(renderFood)} *//*}*/
/*      {foodILike.map(
        dish => (
        <Food name={dish.name} picture={dish.image} key={dish.id} rating={dish.rating} />
        ))}
  </div>
  );
}

export default App;

*/