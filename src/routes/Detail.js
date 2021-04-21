import React from "react";

class Detail extends React.Component{

    componentDidMount(){

        console.log(this.props);

        const { location, history } = this.props;
        
        // 영화 선택없이 URL로 바로 들어온 경우 홈으로 리다이렉트
        if(location.state === undefined){
            history.push("/"); // 홈으로 돌려보내기
        }
    }

    render(){

        const { location } = this.props;

        if(location.state){
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
    }
}


export default Detail;