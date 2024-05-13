import React from "react";
import './style.css'; 

export const Card = (props:any) =>{
    const {title , content} = props.data
    return <>
    <div className="card-container">
        <div className="card">
        <h3>{title}</h3>
        </div>
        <div className="card-content">
        <p>{content}</p>
        </div>
    </div>
    </>
}