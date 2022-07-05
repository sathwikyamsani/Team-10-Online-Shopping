import react from 'react';
import ProductItemCard from '../../productItemCard/ProductItemCard';
import './Mens.css';

function Mens(){
    let ProductList=[
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm<h1>dshfsjhfj</h1>jhdsjfh",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
    ]

    








    return (
        <div>












            <div className="row m-3 carouselboxes">
                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[0]} />
                </div>

                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[1]} />
                </div>

                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[2]} />
                </div>

                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[3]} />
                </div>
                
            </div>

            <div className="row m-3 carouselboxes">
                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[4]} />
                </div>

                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[5]} />
                </div>

                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[6]} />
                </div>

                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[7]} />
                </div>
                
            </div>


            <div className="row m-3 carouselboxes">
                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[8]} />
                </div>

                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[9]} />
                </div>

                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[10]} />
                </div>

                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[11]} />
                </div>
                
            </div>

            <div className="row m-3 carouselboxes">
                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[8]} />
                </div>

                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[9]} />
                </div>

                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[10]} />
                </div>

                <div className="col-sm-3">
                    <ProductItemCard productObj={ProductList[11]} />
                </div>
                
            </div>

        </div>
    );
}

export default Mens