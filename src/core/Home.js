import React,{useState,useEffect} from 'react'
import Base from './Base';
import {getProducts} from "./helper/coreapicalls" 
import "../styles.css"
import Card from './Card';


const Home= ()=> {

    const [products,setProducts]=useState([]);
    const [error,setError]=useState(false);

    const loadAllProducts = ()=>{
        getProducts().then((data)=>{
            if (data.error){
                setError(data.error)
                console.log(error);
            }
            else{
                setProducts(data);
            }
        }).catch(err=>console.log(err))
    }

    useEffect(() => {
        loadAllProducts();
        return () => {
            
        }
    }, [])
    return (
        <Base title="Home Page"description="Welcome to T-shirt store">
            <div className="row">
                {products.map((product,index)=>{
                    return (
                        <div key={index} className="col-4 mb-4">
                            <Card product={product}/>
                        </div>
                    )
                })}
            </div>
        </Base>
    )
}

export default Home;
