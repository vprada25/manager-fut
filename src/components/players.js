
import React from 'react';
import { connect } from 'react-redux'

const player = ({ player, addHeadline , addAlternate }) => {
    return (
        <section>
            <h2>
                Jugadores
        </h2>
            <div className="container-players">
                {
                    player.map(j => (
                        <article className="player">
                            <img src={j.photo} alt={j.name}></img>
                            <h3>{j.name}</h3>
                            <div>
                                <button onClick={()=> addHeadline(j)}>
                                    Titular
                            </button>
                                <button  onClick={()=> addAlternate(j)}>
                                    Suplente
                            </button>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    player: state.player
})

const mapDispatchToProps = dispatch => ({
    addHeadline(j){
        dispatch({
            type: "AGREGAR_TITULAR",
            j
        })
    },
    addAlternate(j){
        dispatch({
            type: "AGREGAR_SUPLENTE",
            j
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(player);