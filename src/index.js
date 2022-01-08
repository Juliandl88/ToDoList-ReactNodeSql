import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./components/Card.js"
import "bootstrap/dist/css/bootstrap.css";


const container = document.getElementById('root');

//ReactDOM.render(que voy a renderizar, donde lo haré)
ReactDOM.render(<Card
                      title="Technique Guide"
                      description="Lern amazing street workout and calisthenics"
                      img="image.png"
                      leftColor="#A74CF2"
                      rightColor="#617BFB"  

                />, container);


