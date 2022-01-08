import React from "react";
import exerciseImg from "../images/exercise.png";
import "../components/styles/Card.css";
import circlesImg from "../images/circles.png";

class Card extends React.Component {

    

  render() {
    return (
      <div className="card mx-auto Fitness-Card"
      style={{
          backgroundImage: `url(${circlesImg}), linear-gradient(to right, #A74CF2, #617BFB)`
      }}

      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={exerciseImg} alt="Imagen ejercicio" className="float-right"/>
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1></h1>
              <p></p>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
