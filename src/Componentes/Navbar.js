import {Link} from "react-router-dom"
import { Context } from '../store/context'
import React, {useContext} from 'react'



const Navbar = () => {

const {store, actions} = useContext(Context)  




  return  <nav className="navbar">
  <div className="container">
    <Link className="navbar-brand" to='/'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKYd9f1Z9xoNR_CJtkjBmkyIEdKJbsTCcdg&usqp=CAU" alt="Bootstrap" width="40" height="40" className="rounded-circle"/>
    
    </Link>

    <h1 className="ms-3 ">Rick y Morty Api</h1>

    <div className="dropdown">
  <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites {store.favorites.length}
  </button>
  <ul className="dropdown-menu">

  {
        store.favorites.map(
          (item, index) => {
            return (
              <li key={index}><span className="dropdown-item"  >
                <Link  to={`/profile/${item.id}`} className=""><span className="">{item.name}</span></Link> <span><i class="fa-solid fa-trash-can" onClick={() => actions.removeFavorite(item.name)}></i></span>
                </span>
                
                </li>

            )
          }
        )
      }


    
  </ul>
</div>
  </div>
</nav>
}

export default Navbar