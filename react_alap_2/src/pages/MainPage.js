import React, { useState } from 'react';
import DataService from '../api/DataService';
import Kerdes from '../components/Kerdes';


export default function MainPage(params) {
    const DS = new DataService;
    const [kategoria, setKategoria] = useState([""]);
    const [kerdesek, setKerdesek] = useState([""]);
    

    if (kategoria[0] === "" || kerdesek[0] === "") {
        DS.get("kategoria/", getKateg);
        DS.get("tesztek/", getTesztek);
    }

    function getKateg(data) {
        setKategoria(data.data);
    }
    
    function getTesztek(data) {
        setKerdesek(data.data);
    }

    return (
        <>
            <select name="temak" id="temaValaszto">
                <option value="test">Válsz témát</option>
                {kategoria.map((kateg, key) =>
                    <option key={key}>{kateg.kategorianev}</option>
                )}
            </select>
            <div>
                {kerdesek.map((kerdes, key) => 
                    <Kerdes kerdes={kerdes}></Kerdes>
                )}
            </div>
        </>
    )
}