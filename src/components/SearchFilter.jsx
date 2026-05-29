import { useState } from "react";

function SearchFilter(){
    const [search,setSearch] = useState("");
    const items = ["pineapple","Apple","Banana","Papaya","Pineapple"];

    const filtered = items.filter(item=>
        item.toLowerCase().includes(search.trim().toLowerCase())
    );
    

    return(<div>
        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}></input>
        <ul>{filtered.map((item,index)=> {
           return <li key={index}>{item}</li>
        })}</ul>
    </div>);
}

export default SearchFilter;