import { useState } from "react";
import RangeSlide from "../RangeSlide/RangeSlide";

export default function Filter(){
const [brands, setbrands] = useState([
    {
        id:1,
        name:'Lapierre',
    },
    {
        id:2,
        name:'Rockrider',
    },
    {
        id:3,
        name:'Cannondale',
    },
    {
        id:4,
        name:'KTM',
    },
    {
        id:5,
        name:'Pinarello',
    },
    {
        id:6,
        name:'Look',
    }
])
    return(
        <div className="filter">
            <h2>Vos Filtres</h2>
            <h3>Prix:</h3>
            <RangeSlide />
            <h3>Genre:</h3>
            <ul>
                <li>Homme</li>
                <li>Femme</li>
                <li>Enfant</li>
            </ul>
            <h3>Marques:</h3>
            <ul>
                {brands.map((brand)=>{
                    return(
                        <li key={brand.id}>{brand.name}</li>
                    )
                })}
            </ul>
            <h3>Durée:</h3>
            <RangeSlide />
        </div> 
    );
}