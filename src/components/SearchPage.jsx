import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const SearchPage = () => {
    return (
        <div className="container">
            <button className="btn btn-info"> <Link to="/"> Back </Link></button>
            <div className="jumbotron">
                <h1>Search a Movie</h1>
            </div>
            <br />
            <div className="main">
                <div className="movie">
                <img src="https://media.giphy.com/media/l2Sq70zdilk5aYYa4/giphy.gif" />
                </div>
                <div class="bl">
                    <label>Search Movie here</label>
                    <br />
                    <input id="find"  type="text" placeholder="Name"/>
                    <button id="add" className="btn btn-warning" onclick="search_movie()">Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
