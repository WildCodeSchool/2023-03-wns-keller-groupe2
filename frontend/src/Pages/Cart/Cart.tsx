import MyCart from "../../Components/MyCart/MyCart";

export default function Cart(){
    return(
        <>
            <h2>Récapitulaitf de votre panier</h2>
            <div className="partitionHorizontal"></div>
            <section className="myCart">
                <MyCart />
            </section>
            <div className="partitionHorizontal"></div>
            <section className="myTotal">

            </section>
        </>
    );
}