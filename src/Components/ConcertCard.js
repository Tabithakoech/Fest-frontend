import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from "./Navbar";

function ConcertCard({key, id, band_name, name, image, date, time, genre}) {
   
    return (
      <>
      {/* <Navbar /> */}
      <section className="container">
          <div key={key} class="con-card">
            <img class="img-single" src={image} alt={name} />
            <h2 class="title">{name} featuring {band_name}</h2>
                  <div class="con">
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>
                    <p>Genre: {genre}</p>
                    <Link to={`/concerts/${id}`}><button class="button-85">See More</button></Link><br></br>
                    <Link to={`/comments`}><button button class="button-85">Comment</button></Link>
                  </div>
          </div>
         
      </section>
      </>
    );
  }
  
  export default ConcertCard;