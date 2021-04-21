/**
 * 이 Navigation.js는 react-router-dom의 Link를 사용해 구현되었기 때문에
 * App.js에서 HashRouters 밖에서 사용 불가
 */

import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return <div>
        {/* <a href="/">Home</a>
        <a href="/about">About</a> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link> 
    </div>
}

export default Navigation;