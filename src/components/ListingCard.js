import React, {useState} from "react";

function ListingCard({listening,handleDelete}) {

const[favorite, setFavorite]=useState(false);

const {description,image,location,id} = listening;

function handleClickFavorite(){
  setFavorite(favorite=> !favorite)
}
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active"  onClick={handleClickFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClickFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
