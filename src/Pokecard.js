import React from 'react'
import './Card.css';

  let  Poke_api = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
  let alter = (number)=>(number <= 999 ? `00${number}`.slice(-3):number)
  function Pokecard(props) {
  let imageSrc = `${Poke_api}${alter(props.id)}.png`;
  return (
    <div className='Pokecard'>
      
      <div className="box">
  <p><strong>Name:{props.name}</strong> </p>
  <img src={imageSrc} alt='Logo'/>
 <p><strong>ID :{props.id}</strong> </p>
 <p><strong>Type :{props.type}</strong> </p>
 <p><strong>Base_Experince :{props.exp}</strong></p>
 </div>
    </div>
  )
}

export default Pokecard