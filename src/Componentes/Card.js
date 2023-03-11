import React, {useContext, useEffect} from 'react'
import ContenidoDeCard from './ContenidoDeCard'
import { Context } from '../store/context'


const Card = () => {

    const {store, actions} = useContext(Context)


  // const [characters, setCharacters] = useState([])

  // const initialUrl = "https://rickandmortyapi.com/api/character"


  // const getcharacters = (url) => {
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setCharacters(data.results))
  //   .catch(error => console.log(error))
  // }
  useEffect(() => {
    actions.fetchPeople("https://rickandmortyapi.com/api/character")
  }, [])


    return <div className='container'> 
            
        <div className='row'>
        {store.peopleList.map(character => {
          const found = store.favorites.find((item) => item.name === character.name)
          return ( 
          
          <div className='col-md-3' key={character.id}>
            <ContenidoDeCard  character={character} found={found}/> 
            </div>
      
        
      
    )})}
        </div>
    </div>
}

export default Card 

