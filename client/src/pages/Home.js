import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";
import { homeArt } from "../assets";

const Main = () => {
  console.log("home: /");
  return (
    <Col className="home-container">
      <Row>
        <Col className="home-banner banner-container">
          <h2>Explore Different Recipes</h2>
          <p>
            Dive into a world of scrumptious recipes – join the culinary
            adventure now!"
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="img1.jpg" alt="placeholder" />
            <img src={homeArt} alt="placeholder" />
            <img src="img2.jpg" alt="placeholder" />
          </div>

          <button id="get-started-btn">
            <Link to="/search">Search</Link>
          </button>
        </Col>
      </Row>
    </Col>
  );
};

export default Main;
