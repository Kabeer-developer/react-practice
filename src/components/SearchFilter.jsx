import { useState } from "react";

function SearchFilter(){
    const [search,setSearch] = useState("");
    const items = ["pineapple","Apple","Banana","Papaya","Pineapple"];

    const filtered = items.filter((i)=> i.toLowerCase().includes(search.trim().toLowerCase()));
    
    return(
        <div>
            <input type="text" onChange={(e)=> setSearch(e.target.value)}></input>
            {filtered.map((item,index)=> {
                return <li key={index}>{item}</li>
            })}
        </div>
    )
}

export default SearchFilter;