import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";


// state가 필요없는 경우 function component로 생성
function Movie({id, year, title, summary, poster, genres}){
    return (
        <Link to = {{
            pathname: `/movie/${id}`,
            state: {
                // 프로퍼티 이름이 key 이름과 같을경우, 축약기법을 활용할 수 있습니다.
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres__genre">{genre}</li>
                ))}
                {/* {genres.map(genre => {return <li>{genre}</li>})} */}
                {/* {genres.map(genre => <li>{genre}</li>)} */}
                {/* {genres.map(function(genre){
                    return <li>genre</li>
                })} */}
                </ul>
                <p className="movie__summary">{summary.slice(0,140)}...</p>
            </div>
        </div>
        </Link>
    );
}

// 맞는 prop이 들어왔는지 확인
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;