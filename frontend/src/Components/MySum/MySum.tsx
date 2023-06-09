import "./style.scss";

export default function MySum(){
    return(
        <section className="mySum">  
            <article className="totalTtc">
                <h4>Total produit TTC:</h4>
                <h4>1750 €</h4>
            </article>
            <div className="sumPartition"></div>
            <article className="totalShippingCosts">
                <h4>Total frais de port</h4>
                <h4>200 €</h4>
            </article>
            <div className="sumPartition"></div>
            <article className="sum">
                <h4>Total</h4>
                <h4>1950 €</h4>
            </article>
            <article className="actionButton">
                <button type="button">Continuer mes achats</button>
                <button type="button">Commander</button>
            </article>
        </section>
    );
}