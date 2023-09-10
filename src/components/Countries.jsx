import {useState, useEffect } from "react";
import Country from "./country";

const Countries = () => {
const [countries,setCountries] = useState([])
const [visitedCountry,setvisitedCountry] = useState([])
const [visitedFlags,setvisitedFlags] = useState([])

useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=> setCountries(data))
},[])

const handlevisitedFlag = (flag) =>{
const pushFlag = [...visitedFlags, flag]
setvisitedFlags(pushFlag)
}

const handlevisitedCountry = (country) =>{
const pushVisited = [...visitedCountry, country];
setvisitedCountry(pushVisited)
}
  return (
    <>
         <div className="visited">
     <h1>Countreis: {countries.length}</h1>
     <h2>Countried I've visited...</h2>
     {visitedFlags.map(flag =><img src={flag.flags.png} height={"200px"} width={"240px"} />)}
     <ul>{visitedCountry.map(country => <li>{country.name.common}</li>)}</ul>
     </div>
         <div className="countryParent">
      {countries.map(country => <Country key={country.cca3} country={country} handlevisitedFlag ={handlevisitedFlag} handlevisitedCountry = {handlevisitedCountry}></Country>)}
    </div>
    </>
  )
}
export default Countries;