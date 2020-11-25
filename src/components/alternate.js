import React from 'react';
import { connect } from 'react-redux'

const alternate = ({alternate}) => {
    return (
        <section>
            <h2>Suplentes</h2>
            <div className="alternates" >
                {
                    alternate.map(j => (
                        <article className="alternate">
                            <div className="">
                                <img src={j.photo} alt={j.name}></img>
                                <button>x</button>
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

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(alternate);