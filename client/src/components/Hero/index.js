import React from "react";
import ArticleIcon from '@mui/icons-material/Article';
import './style.css';

export default function Hero() {

  return (
    <section className="d-flex flex-justify-between align-center">
      <div className="d-flex align-center">
        <ArticleIcon fontSize="large"/>
        <h2>TRACK YOUR SHIPMENTS</h2>
      </div>
      <div>

      </div>
    </section>
  )
}

//<section className="hero-bg" style={{backgroundImage: `url(${bgImg})`}}>