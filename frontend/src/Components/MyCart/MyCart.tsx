import { BsPlusLg, BsFillTrash3Fill } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import bycicle from "../../assets/bicycle.png"
import "./style.scss";
import { useState } from "react";

export default function MyCart(){
    const [count, setCount] = useState(0);
    return(
        <div className="myCart">
            <img src={bycicle} alt="Productimage" />
            <section className="productInfo">
                <h4 className="productName">Cannondale - vélo Route</h4>
                <p className="dateOfRent">Date de location: 12/05 au 15/05</p>
                <button className="moreInfo" type="button"> Voir le produit</button>
            </section>
            <section className="moreLessProduct">
                <button className="moreButton" type="button" onClick={()=>{setCount(count + 1)}}><BsPlusLg/></button>
                <p className="productCount">{count}</p>
                <button className="lessButton" type="button" onClick={()=>{setCount(count - 1)}}><BiMinus/></button>
                <button className="deletButton" type="button"><BsFillTrash3Fill/></button>
            </section>
            <p className="price">1750 €</p>
        </div>
    )
}