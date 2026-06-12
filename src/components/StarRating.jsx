import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const stars = [1,2,3,4,5];

  return(
    <div style={{fontSize:"40px"}}>
        {stars.map((star)=> {
            return <span key={star}
             style={{cursor:"pointer",color: star <= rating ? "gold" : "gray"}}
              onClick={()=> setRating(star)}>★</span>
        })}
         <p>Rating :{rating}</p>
    </div>
  );
  
}