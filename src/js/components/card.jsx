import React from "react";


export const Card = props => {

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <img className="card-img-top" src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <button className="btn btn-primary">Learn more</button>
        </div>
    )
}