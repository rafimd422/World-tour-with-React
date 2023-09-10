import {useState, useEffect } from "react";
import Country from "./country";

const Countries = () => {
const [countries,setCountries] = useState([])

useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=> setCountries(data))
},[])

  return (
    <>
     <h1>Countreis: {countries.length}</h1>
         <div className="countryParent">
      {countries.map(country => <Country key={country.cca3} country={country}></Country>)}
    </div>
    </>

  )
}
export default Countries;