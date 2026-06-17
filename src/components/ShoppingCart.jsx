import { useState } from "react";

export default function ShoppingCart(){
    const products = [
        {id:1,name:"laptop",price:1000,quantity:1},
        {id:2,name:"Mobile",price:500,quantity:1},
        {id:3,name:"Tv",price:2000,quantity:1},
        {id:4,name:"Fridge",price:4000,quantity:1},
    ];
    const [cart,setCart] = useState([]);
    const [quantity,setQuantity] = useState(1);

    function addToCart(product){
        setCart([...cart,product]);
       
    }

    function removeCart(index){
        setCart(cart.filter((item,i)=> i!==index));
    }

    return(
        <div>
            {products.map((p,i)=> {
                return <div key={p.id}>
                    <h2>{p.name} </h2>
                    <p>{p.price}</p>
                    <button onClick={()=>addToCart(p)
                    }>Add to Cart</button>
                </div>
            })}
            <div>
                <h1>Cart</h1>
                {cart.map((item,index)=> { 
                    return <div key={index}>
                       <h2>{item.name} </h2>
                    <p>{item.price}</p>
                    <p>Quantity<button>-</button>{item.quantity}<button onClick={()=> item.quantity = prev=> prev+1}>+</button></p>
                    <button onClick={()=> removeCart(index)}>Remove</button>
                    </div>
                })}
            </div>
        </div>
    );
}