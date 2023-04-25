import React from "react";
import { Link } from 'react-router-dom';


const Header = (props) => {
    return (<div className="container">
        <div className="d-flex justify-content-between align-items-center">
            <h1 className="display-1 mx-3">Pet Shelter</h1>
            <Link className="fs-1 mx-3" to={props.nav}>{props.link}</Link>
        </div>
        <div>
            <p className="fs-2">{props.message}</p>
        </div>
    </div>)
}
export default Header;