import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"


const Profile =() => {

    const {id} = useParams()
   
    const [informacion, setInformacion] = useState()

    useEffect(() => {
        const getcharacters = async () => {
            const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            
            try {
                const users = await data.json()
            setInformacion(users)
            } catch(error) {
                console.log('error en la api', error)
            }
            
       
           }
        
      getcharacters()
    }, [id])
  
  
  
    
    


    return <div className='d-flex justify-content-center' style={{ width:'100%'}}>
       <div className="card " style={{width: '35rem', marginTop:'100px'}}> 
       <img src={informacion?.image} className="card-img" alt="..."/>
         </div> 
         <div className='ms-5 'style={{ marginTop:'100px'}} >
            <div>
            <h1 className='mb-4'>{informacion?.name}</h1>
            
            <h4>FEATURES</h4>
            <h5 className='mb-0'>Species:</h5>
            <p className='ms-3'>{informacion?.species}</p>
            <h5 className='mb-0'>Gender</h5>
            <p className='ms-3'>{informacion?.gender}</p>
            </div>
            
            <hr/>
            <div>
            <h4>INFORMATION</h4>
            <p >Status:<span className={informacion?.status !== "Alive" ? "badge rounded-pill text-bg-danger" : "badge rounded-pill text-bg-success"} style={{marginLeft: '10px'}} >{informacion?.status} </span></p>
            <h5 className='mb-0'>Origin:</h5>
            <p className='ms-3'>{informacion?.origin.name}</p>
            <h5 className='mb-0'>Last known location:</h5>
            <p className='ms-3'>{informacion?.location.name}</p>
            <h5 className='mb-0'>Created:</h5>
            <p className='ms-3'>{informacion?.created}</p>

            </div>
         <div className="d-grid gap-2 col-3 mx-auto">
  <button className="btn btn-danger" type="button">Button</button>
  
</div>
            </div>
            
         


    </div>
}

export default Profile