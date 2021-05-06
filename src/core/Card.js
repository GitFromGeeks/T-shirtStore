import React from 'react'
import ImageHelper from './helper/imageHelper';
import {Redirect} from "react-router-dom";
import { addItemToCart,removeItemFromCart } from './helper/cartHelper';




const isAuthenticated=true;
const Card = ({
    product,
    addtoCard=true,
    removeFromCart=false,
    }) => {
        const cardTitile=product?product.name: "photo form pexel"
        const cardDescription=product?product.description:"Default description "
        const CardPrice=product?product.price:"Price"

        const addToCart=()=>{
            if(isAuthenticated){
              addItemToCart(product,()=>{})
                console.log("Added to Cart");
            }
            else{
                console.log("Login Please !");
            }
        };

        const getAredirect = redirect=>{
            if(redirect){
                return <Redirect to="/cart"/>
            }
        };
        const showAddToCart=(addToCart)=>{
            return(
                addToCart && (
                    <button
                    onClick={addToCart}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                  >
                    Add to Cart
                  </button>
                )
            )
        };

        const showRemoveFromCart=removeFromCart=>{
            return (
                removeFromCart && (
                    <button
                    onClick={()=>{
                      removeItemFromCart(product._id);
                        console.log("Product removed form cart");
                    }}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                  >
                    Remove from cart
                  </button>
                )
            )
        }
    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cardTitile}</div>
        <div className="card-body">
            <ImageHelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cardDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {CardPrice}</p>
          <div className="row">
            <div className="col-12">
                {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
                {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Card;
