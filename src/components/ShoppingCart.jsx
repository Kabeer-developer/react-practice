import { useState } from "react";

export default function ShoppingCart(){
    const products = [
        {id:1,name:"laptop",price:1000,quantity:1},
        {id:2,name:"Mobile",price:500,quantity:1},
        {id:3,name:"Tv",price:2000,quantity:1},
        {id:4,name:"Fridge",price:4000,quantity:1},
    ];
    
    const [cart,setCart] = useState([])
    
    function addToCart(product){
        setCart([...cart,product]);
    }

    function delCart(index){
        setCart(cart.filter((item,i)=> i!==index));
    }

    function quantityInc(index){
        const updatedCart = cart.map((item,i)=> i==index?{...item,quantity:item.quantity+1}:item)
        setCart(updatedCart);
    }

    function quantityDec(index){
        const updatedCart = cart.map((item,i)=>{
             if(item.quantity==1){
                window.alert("Quantity Cannot be 0");
                return item;
             }
           return  i==index?{...item,quantity:item.quantity-1}:item
    })
        setCart(updatedCart);
    }
    return(
        <div>
           <div>
            {products.map((item,index)=>{
            return <div key={index}>
                Item : {item.id} <br></br>
                 Name : {item.name} <br></br>
                 Price : {item.price}
                 <br></br>
                 <button onClick={()=> addToCart(item)} >
                    Add to Cart
                 </button>
                    </div>
           })}
           </div>
           <br></br>
           <div>
            <h1>Your Cart</h1>
            {cart.map((item,index)=> {
                return <div key={index}>
                   Name: {item.name} Price : {item.price}
                   <br></br>
                  <button onClick={()=> quantityDec(index)}>-</button>{item.quantity}<button onClick={()=> quantityInc(index)}>+</button> <br></br>
                   <button onClick={()=> delCart(index)}>Remove</button>
                </div>
            })}
           </div>
           Total : {cart.reduce((total,item)=> total+item.price*item.quantity,0)}
        </div>
    )
}