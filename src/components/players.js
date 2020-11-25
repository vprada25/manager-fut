
import React from 'react';
import { connect } from 'react-redux'

const player = ({ player }) => {
    return (
        <section>
            <h2>
                Jugadores
        </h2>
            <div className="container-players">
                {
                    player.map(j => (
                        <article className="player">
                            <img src={j.foto} alt={j.nombre}></img>
                            <h3>{j.nombre}</h3>
                            <div>
                                <button>
                                    Titular
                            </button>
                                <button>
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

})

export default connect(mapStateToProps, mapDispatchToProps)(player);