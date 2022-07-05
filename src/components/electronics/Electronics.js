import react from 'react';
import { BiHeart } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import './Electronics.css';

function Electronics(){
    return(
        <div className='bdy'>
            <h1>Electronics</h1>
            <div className='container'>
                <div className='col-md-3'>
                    <div className='card product'>
                        <div className='product-image'>
                            <a href="#" className='image'>
                                <img src="https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50" className='pic-1'></img>
                                <img src="https://assets.ajio.com/medias/sys_master/root/20220211/7ufa/62067964f997dd03e2cbe307/-473Wx593H-463813688-green-MODEL4.jpg" className='pic-2'></img>
                            </a>
                            <span className='discount'>Sale</span>
                            <a href="#" className='cart'>Add to cart</a>
                            <div className='links'>
                                <ul>
                                    <li><a href="#"><BiHeart /></a></li>
                                    <li><a href="#"><BiSearch /></a></li>
                                </ul>
                            </div>
                            <div className='content'>
                                <span className='category'><a href="#">Shoes</a></span>
                                <h3 className='title'><a href="#">Sandals</a></h3>
                                <div className='price'>
                                    <span>Rs.800</span>Rs.500.00
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>























            
        </div>
    )
};

export default Electronics