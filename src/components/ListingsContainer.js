import React from "react";
import ListingCard from "./ListingCard"

// import ListingCard from "./ListingCard";

function ListingsContainer({setListings,listings,handleDelete}) {








  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */
        listings.map((listening) => <ListingCard key={listening.description} listening={listening} handleDelete={handleDelete}/>)
        }
      </ul>
      
    </main>
  );
}

export default ListingsContainer;
