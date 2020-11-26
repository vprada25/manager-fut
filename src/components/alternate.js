import React from 'react';
import { connect } from 'react-redux'

const alternate = ({alternate, deleteAlternate}) => {
    return (
        <section>
            <h2>Suplentes</h2>
            <div className="alternates" >
                {
                    alternate.map(j => (
                        <article className="alternate">
                            <div className="">
                                <img src={j.photo} alt={j.name}></img>
                                <button onClick={()=> deleteAlternate(j)}>x</button>
                            </div>
                            <p>{j.name}</p>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    alternate: state.alternate
})

const mapDispatchToProps = dispatch => ({
    deleteAlternate(j){
        dispatch({
            type: "BORRAR_SUPLENTE",
            j
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(alternate);