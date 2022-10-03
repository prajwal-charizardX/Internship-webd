import React, { Component } from "react";
import "./About.css";

export class About extends Component {
  render() {
    
    return (
      <div className="container-about">
        <div className="grid">
          <div className="grid-ele1">
            <div className="grid-title">01</div>
            <div className="grid-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              pariatur laudantium nihil impedit fuga quae earum eum? Possimus
              dolorem voluptatem explicabo natus at ad, eaque beatae tenetur
              quia molestiae quae?
            </div>
          </div>
          <div className="grid-ele2">
            <div className="grid-title">02</div>
            <div className="grid-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa qui
              voluptates accusantium molestias facilis aperiam incidunt, esse,
              necessitatibus perspiciatis itaque beatae laborum sunt vel dicta
              pariatur velit sed minus explicabo.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
