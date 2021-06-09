import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <body>
        <div class="container">
            <div class="jumbotron">
                <h1>Emotion Based Movie Recommender</h1>
            </div>
            <br />
            <div class="main">
                <div class="face">
                    <img style={{width: "300px"}} src="https://www.kindpng.com/picc/m/288-2881462_face-recognition-icon-png-transparent-png.png" />
                    <br />
                    <button class="btn btn-info"> <Link to="/detect">Detect Face</Link> </button>
                </div>
                <div class="search">
                    <img id='recog' style={{width: "350px"}} src="https://www.nicepng.com/png/detail/77-779902_information-f-a-q-s-and-more-searching.png"/>
                    <br />
                    <button class="btn btn-success"> <Link to="/search">Search A Movie</Link> </button>
                </div>
            </div>
        </div>
        </body>
    )
}

export default HomePage

