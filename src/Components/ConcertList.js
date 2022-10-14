import React from "react";
import ConcertCard from "./ConcertCard";
import Concert from "./Concert";

function ConcertList({ concerts}) {
    const renderConcerts = concerts.map((concert)=>(
      <ConcertCard key={concert.id} id={concert.id} band_name={concert.band_name} name={concert.name} image={concert.image} date={concert.date} time={concert.time} genre={concert.genre}/>
      ));
    return (
      <ul className='cards'>
      {renderConcerts}
      </ul>
    );
  }
  
  export default ConcertList;

