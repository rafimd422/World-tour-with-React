import React, { useState } from 'react'

const Country = ({country}) => {
   const {name,flags,population,area,cca3} = country;
    console.log(country)


    const [visited, setVisited] = useState(true)
const handleClick = () =>{
  setVisited(!visited)
}


  return (
    <div className={!visited? 'clicked':"country"}>
      <h3>Name: {name?.common}</h3>
      <img src={flags?.png} alt="" />
      <p>Population: {population}</p>
      <p>Areas: {area}</p>
      <p><small>Code: {cca3}</small></p>
      <button onClick={handleClick}>{visited ? "Visited":"Going"}</button>
      <p><small>{!visited?"I visited This country." : "Lets go"}</small></p>
    </div>
  )
}

export default Country
