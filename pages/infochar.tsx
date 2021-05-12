
import React, { useState , useEffect } from "react";
import ProductList from "../components/ProductList"
import Surch from "../components/Search"
import Link from "next/link";

const SurchChar = () => {
  
  const [loading, setLoading] = useState(false); 
  const [character, setCharacter] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  function search(searchValue) {

    setLoading(true);
    setErrorMessage(false);

    fetch(`https://www.amiiboapi.com/api/amiibo/?name=${searchValue}`)
    .then(res => {
      if (res.status === 404) {
        setErrorMessage(true);
        setLoading(false);
      } else {
        return res
      }})
      .then(res=> res.json())
      .then(jsonResponse => {
        setCharacter(jsonResponse.amiibo);
        setLoading(false);
      })
      .catch (res => {
        console.error(`Ошибка!`)
      })
    
  };
  
  return (
    <div className="app">
      <div className="info-div">
      <Link href="/">
        <span className="link-title">Main page</span>
      </Link> 
        <Surch search={search}/>
        <div>
          { loading && errorMessage ? (<span>loading...</span>)
          : errorMessage ? (<div className="erroring"><h1 className="erroring">Sorry, try another name</h1></div>) 
          : <ProductList products={character}/>}
        </div>
      </div>
    </div>
   );   
}; 

export default SurchChar;