import React from 'react';
import { connect } from 'react-redux'

const headline = ({headline}) => {
    return (
        <section>
            <h2>Titulares</h2>
            <div className="cancha" >
                {
                    headline.map(j => (
                        <article className="headline">
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
    headline: state.headline
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(headline);


