import { createStore } from 'redux'


const initState = {
    player: [
        {
            id: 1,
            name: "David Ospina",
            photo: "https://fcf.com.co/wp-content/uploads/2019/05/David-Ospina-445x400.png"
        },
        {
            id: 2,
            name: "Santiago Arias",
            photo: "https://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2019/06/10/15601698611887.jpg"
        },
        {
            id: 3,
            name: "Jeison Murillo",
            photo: "https://www.laopinion.com.co/sites/default/files/styles/640x370/public/2015/07/07/imagen/murillo.jpg"
        },
        {
            id: 4,
            name: "Duvan Zapata",
            photo: "https://fcf.com.co/wp-content/uploads/2019/04/Duvan-Zapata-1-445x400.png"
        },
        {
            id: 5,
            name: "David Ospina",
            photo: "https://fcf.com.co/wp-content/uploads/2019/05/David-Ospina-445x400.png"
        },
        {
            id: 6,
            name: "Santiago Arias",
            photo: "https://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2019/06/10/15601698611887.jpg"
        },
        {
            id: 7,
            name: "Jeison Murillo",
            photo: "https://www.laopinion.com.co/sites/default/files/styles/640x370/public/2015/07/07/imagen/murillo.jpg"
        },
        {
            id: 8,
            name: "Duvan Zapata",
            photo: "https://fcf.com.co/wp-content/uploads/2019/04/Duvan-Zapata-1-445x400.png"
        }


    ],
    headline: [],
    alternate: []
}

const reducer = (state = initState, action) => {
    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            headline: state.headline.concat(action.j),
            player: state.player.filter(j=> j.id!== action.j.id)
        }
    }

    if (action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state,
            alternate: state.alternate.concat(action.j),
            player: state.player.filter(j=> j.id!== action.j.id)
        }
    }

    if (action.type === "BORRAR_TITULAR") {
        return {
            ...state,
            headline: state.headline.filter(j=> j.id!== action.j.id),
            player: state.player.concat(action.j)
        }
    }
   
    
    if (action.type === "BORRAR_SUPLENTE") {
        return {
            ...state,
            alternate: state.alternate.filter(j=> j.id!== action.j.id),
            player: state.player.concat(action.j)
        }
    }
    return state
}

export default createStore(reducer)