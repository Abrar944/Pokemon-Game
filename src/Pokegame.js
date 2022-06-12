import React from 'react'
import Pokedex from './Pokedex';

function Pokegame(props) {
  var arr =[
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
  let hand1 =[];
  let hand2 =arr;
  while (hand1.length < hand2.length) {
    let randomindex = Math.floor(Math.random()  * hand2.length);
    let randompoke = hand2.splice(randomindex, 1)[0];
    hand1.push(randompoke);

  }
  let exp1 = hand1.reduce((exp,arr)=> exp+ arr.base_experience,0) 
  let exp2 = hand2.reduce((exp,arr)=> exp+ arr.base_experience,0) 
  console.log(exp1);
  console.log(exp2);
  return (
    
    <div className='Pokegame'>
<h1>Pokegame!</h1>
<Pokedex arr= {hand1} exp = {exp1}isWinner={exp1>exp2} player = "Player1"  />
<Pokedex arr= {hand2} exp = {exp2} isWinner={exp2>exp1}player = "Player2" />
    </div>
  )
}

export default Pokegame