import React from "react";
import PropTypes from "prop-types";

// state가 필요없는 경우 function component로 생성
function Movie({id, year, title, summary, poster}){
    return <h4>{title}</h4>
}

// 맞는 prop이 들어왔는지 확인
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;