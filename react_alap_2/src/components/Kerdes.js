import { useState } from "react";
import "./kerdes.css";

export default function Kerdes(props) {

    function ellenoriz(valasz, ev, num) {
        
        if (valasz === props.kerdes.helyes) {
            ev.target.style.backgroundColor = "green";    
            ev.target.style.color = "white";    
            
        }else{
            ev.target.style.backgroundColor = "red";    
            ev.target.style.color = "white";    
        }
    }

    return(
        <>
        <h1>
            {props.kerdes.kerdes}
        </h1>
        <div className="valaszok">
        <button onClick={(e) => ellenoriz("v1", e)} className="valasz" >{props.kerdes.v1}</button>
        <button onClick={(e) => ellenoriz("v2", e)} className="valasz" >{props.kerdes.v2}</button>
        <button onClick={(e) => ellenoriz("v3", e)} className="valasz" >{props.kerdes.v3}</button>
        <button onClick={(e) => ellenoriz("v4", e)} className="valasz" >{props.kerdes.v4}</button>
        </div>
        
        </>
    )
}