 const getState = ({setStore, getAction, getStore}) => {
    return {
        store : {
                favorites:[],
                peopleList:[],
                peopleinfo: null
        },
        actions: {
            fetchPeople: async (url) => {

              // const  URL = 'https://rickandmortyapi.com/api/character'
               const CONFIG = {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                    }
                }

                const response = await fetch( url, CONFIG)
                const json = await response.json()

                console.log('DATAAAAAAAAAAAAA', json)
                setStore({ peopleList: json.results, peopleinfo: json.info} )
            },
            
            setFavorites: (id, name) => {
                const store = getStore();
                const found = store.favorites.find((item) => item.name === name)
                if(!found) setStore({favorites: [...store.favorites, {id, name} ]})
                
            },

            removeFavorite: name => {
                const store = getStore();
                const newFavorites = store.favorites.filter(item => item.name !== name);
                setStore({ favorites: newFavorites });
              }
        }

    }
}

export default getState