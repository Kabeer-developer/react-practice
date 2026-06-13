import { useState } from "react";

function Pagination(){
    const [currentPage,setCurrentpage] = useState(1);
    const itemsperPage = 5;
     const items = [
        "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
        "Item 6", "Item 7", "Item 8", "Item 9", "Item 10",
        "Item 11", "Item 12", "Item 13", "Item 14", "Item 15"
    ];

    const totalPage = Math.ceil(items.length/itemsperPage);
    const startIndex = (currentPage-1)*itemsperPage;
    const currentItems = items.slice(startIndex,startIndex+itemsperPage);

    return(<div>
       <ul>{currentItems.map((item,i)=> {
        return <li key={i}>{item}</li>
       })}</ul>
       <div>
        <button disabled={currentPage==1} onClick={()=> setCurrentpage(currentPage-1)} >Previous</button>
        <p>{currentPage} of {totalPage}</p>
        <button  onClick={()=> setCurrentpage(currentPage+1)} disabled={currentPage==totalPage}>Next</button>
       </div>
    </div>)
}
export default Pagination;