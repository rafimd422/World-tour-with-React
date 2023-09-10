import {useState, useEffect } from "react";
import Country from "./country";

const Countries = () => {
const [countries,setCountries] = useState([])
const [visitedCountry,setvisitedCountry] = useState([])

useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=> setCountries(data))
},[])

const handlevisitedCountry = (country) =>{
const pushVisited = [...visitedCountry, country];
setvisitedCountry(pushVisited)
}
  return (
    <>
     <h1>Countreis: {countries.length}</h1>
     <div>
     <h2>Countried I've visited...</h2>
     <ul>{visitedCountry.map(country => <li>{country.name.common}</li>)}</ul>
     </div>
         <div className="countryParent">
      {countries.map(country => <Country key={country.cca3} country={country} handlevisitedCountry = {handlevisitedCountry}></Country>)}
    </div>
    </>
  )
}
export default Countries;