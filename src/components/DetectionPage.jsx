import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const DetectionPage = () => {
    return (
        <body>
        <br />
        <div class="container">
            <button class="btn btn-info"> <Link to="/">Back</Link> </button>
            <div class="jumbotron">
                <h1>Emotion Prediction</h1>
            </div>
            <br />
            <div class="main">
                <div class="emotion">
                    <video id="video" width="720" height="560" autoplay muted></video>
                    <button id="detect" class="btn btn-success" onclick="startVideo()">Detect Expressions</button>
                </div>
            </div>
        </div>
      </body>
    )
}

export default DetectionPage
