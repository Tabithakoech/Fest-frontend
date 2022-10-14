import React from 'react';
import { useEffect, useState } from "react";
import Search from "./Search";
import ConcertList from "./ConcertList";


function ConcertHomePage({renderConcerts}) {
    const [concerts, setConcerts] = useState([]);
    const [query, setQuery] = useState("");
  
    useEffect(() => {
      fetch(`/concerts`)
        .then((r) => r.json())
        .then(setConcerts);
    }, []);

    const filterConcerts = concerts.filter((concert) => {
      return concert.genre.toLowerCase().includes(query.toLowerCase());
    });

    return (
      <section className="container">
      <Search setQuery={setQuery}/>
      <ConcertList concerts={filterConcerts} renderConcerts={renderConcerts}/>
      </section>
    );
  }
  
  export default ConcertHomePage;