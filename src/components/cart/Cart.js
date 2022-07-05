import React from 'react';
import './Cart.css';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../slices/userSlice.js';
import { incrementQuantityOfProduct } from '../../slices/userSlice.js';
import { decrementQuantityOfProduct } from '../../slices/userSlice.js';
import { useState,useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Cart(){

    let productsList = useSelector(state=>state.users)

    let dispatch = useDispatch();

    let navigate = useNavigate();

    const removeItem = (indexvalue) => {
        let actionObj = removeProductFromCart(indexvalue);
        dispatch(actionObj)
    }

    const incrementQuantity = (indexvalue) => {
        let actionObj = incrementQuantityOfProduct(indexvalue)

        dispatch(actionObj)
    }

    const decrementQuantity = (indexvalue) => {

        if(productsList[indexvalue].quantitySelected===1){
            let actionObj = removeProductFromCart(indexvalue);
            dispatch(actionObj)
        }
        else{
            let actionObj = decrementQuantityOfProduct(indexvalue)
            dispatch(actionObj)
        }
    }

    let [total,setTotal] = useState(0)

    useEffect(() => {
        let obj = productsList.reduce((sum,userObj) => sum+Number(userObj.subTotalCost),0);
        console.log(obj)
        setTotal(obj)
    })

    const taxInvoice = ()=> {
        navigate('/invoice');
    }


    return (
        <div className='container mx-auto container'>
            

            <h1 className='temp'>Cart</h1>
            
            {
                productsList.map((userObj,index)=><div className='col-12 bg-dark p-2 m-2'>
                    <div className=' row m-2 p-2 border bg-white'>
                        <div className='col-2'>
                            <img src={userObj.ProductImage1} className="img-fluid border"></img>
                        </div>

                        <div className='col-3'>
                        <h4 className="pt-2 fs-xs-6" >{userObj.model}</h4>

                <p className='fs-6' >text one line</p>
                    <div className='pb-2'>
                        <i className="bi bi-star-fill" style={{color: "#FFA41C"}}></i>
                        <i className="bi bi-star-fill" style={{color: "#FFA41C"}}></i>
                        <i className="bi bi-star-fill" style={{color: "#FFA41C"}}></i>
                        <i className="bi bi-star-fill" style={{color: "#FFA41C"}}></i>
                        <i className="bi bi-star-half" style={{color: "#FFA41C"}}></i>
                        <span> 4.5</span>
                    </div>

                    <span className='fw-bold fs-5' style={{"color": "#c66"}} > Rs.{userObj.discountcost}</span>

                        </div>

                        <div className='col-3 text-center mt-5 mt-5'>
                            <br />
                            <div>
                                <span onClick={() => decrementQuantity(index)}>
                                    <button className='btn border'><AiFillCaretLeft /></button>
                                </span>
                                <span className=' p-3 ps-3 pe-3'>
                               {userObj.quantitySelected}
                                </span>
                                <span>
                                    <button className='btn border' onClick={() => incrementQuantity(index)}><AiFillCaretRight /></button>
                                </span>
                                </div>
                            

                        </div>

                        <div className='col-4 border text-center mt-5 mt-5'>
                            <br/>
                            <p>{userObj.subTotalCost}</p>

                        </div>


                        

                        

                        
                              

                        
                    </div>
                    <div className='text-end pe-2'>
                    <button className='btn btn-sm btn-danger fs-6' onClick={() => removeItem(index)}>Remove</button>
                    </div>
                    </div>
            )}

            <h1 className='text-end'>Total : {total}</h1>

            <div className='text-end'>
                    <button className='btn btn-danger' type="button" onClick={taxInvoice}>Buy Now</button>
            </div>
           
           
           


        </div>
    );
}

export default Cart