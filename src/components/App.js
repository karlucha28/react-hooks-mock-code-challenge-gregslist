import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [listings,setListings]=useState([]);

const[search,setSearch]=useState("");


// const[submit, setSubmit]=useState([]); Didn't finish the search 
// button(need help with that, I can do it by changing the DOM)


const url = "http://localhost:6001/listings";


  useEffect(() => {

    fetch(url)
    .then(response => response.json())
    .then(data => {setListings(data)})

},[])





//Search
 let newArray = listings.filter((listing)=> 
 {return listing.description.toLowerCase().includes(search.toLowerCase())})



function callbackFromHeader(e){
  setSearch(e)


}


function callbackFromHeadeSubmit(e){
  e.preventDefault();
  console.log("wow");
  



  
  
}


//Delete
function handleDelete(id){
  let newArrayTwo = listings.filter((listing)=> listing.id !== id)
  setListings(newArrayTwo)

  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    }
})

}



  return (
    <div className="app">
      <Header callbackFromHeader={callbackFromHeader} search={search} callbackFromHeadeSubmit={callbackFromHeadeSubmit}/>
      <ListingsContainer setListings={setListings} listings={newArray} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
