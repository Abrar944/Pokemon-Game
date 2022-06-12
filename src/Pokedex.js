import React from 'react'
import Pokecard from './Pokecard';
import './pokedex.css';
export default function Pokedex(props) {
 
  return (
    <div className='pokedex' >
      
 <h1 className="heading">PokeMon</h1>
  <h2>Total Exprience:: {props.exp}  </h2>
  <p><strong>{props.player}</strong></p>
  <p><strong>{props.isWinner ? 'Winner!':'Losser!' }</strong></p>
 <div className="pokecards">

 {props.arr.map((p) => (
    <Pokecard id = {p.id} name = {p.name} type = {p.type} exp = {p.base_experience}    />
   ))}
   </div>
    </div>
  )
}
