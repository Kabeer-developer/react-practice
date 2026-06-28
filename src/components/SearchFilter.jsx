import { useState } from "react";

function SearchFilter(){
    const [search,setSearch] = useState("");
    const items = ["pineapple","Apple","Banana","Papaya","Pineapple"];

    const filtered = items.filter((i)=> i.toLowerCase().includes(search.trim().toLowerCase()));

    return(
        <div>
           <input placeholder="Search" onChange={(e)=> setSearch(e.target.value)} value={search}></input>
           {filtered.map((item,i)=>
        <li key={i}>{item}</li>)}
        </div>
    )
}

export default SearchFilter;