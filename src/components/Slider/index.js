import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./index.scss";
import backimg from "../../images/the-promised-neverland.jpeg";
export const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={backimg} alt="First slide" />
        <Carousel.Caption>
          <h3>Yakusoku No Neverland</h3>
          <p>Our heroes disciver that their life is'nt as it appears</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
