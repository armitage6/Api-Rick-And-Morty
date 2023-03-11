import {Link} from "react-router-dom"
import React, {useContext} from 'react'
import { Context } from '../store/context'
   
    
    const ContenidoDeCard = ({character, found}) => {
      
      const {store, actions} = useContext(Context)
      

        return (
            <div className="card mt-5 border border-dark" style={{width: "18rem"}}>
    <img src={character.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">{character.name}</h5>
      
      <div className="text-center">
        <p className="badge rounded-pill text-bg-primary ">{character.species}</p>
      </div>
      <Link    to={`/profile/${character.id}`} className="btn btn-outline-dark" >Go somewhere</Link>

      {found? 
      <span onClick={() => actions.removeFavorite(character.name)} type="button" className="btn btn-dark" style={{ marginLeft:'70px'}}><i className="fa-regular fa-heart"></i></span>
       : 
       <span onClick={() => actions.setFavorites(character.id, character.name)  } type="button" className="btn btn btn-outline-dark" style={{ marginLeft:'70px'}}><i className="fa-regular fa-heart"></i></span>   }
      
    </div>
  </div>
        )
    }

    export default ContenidoDeCard