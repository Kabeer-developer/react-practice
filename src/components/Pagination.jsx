import { useState } from "react";

function Pagination(){
     const [currentPage , setCurrentPage] = useState(1);
     const itemsPerPage=5;
     const items = [
        "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
        "Item 6", "Item 7", "Item 8", "Item 9", "Item 10",
        "Item 11", "Item 12", "Item 13", "Item 14", "Item 15","Item16"
    ];
     const totalPages = Math.ceil(items.length/itemsPerPage);
     const startIndex = (currentPage-1)*itemsPerPage;
     const currentItems = items.slice(startIndex,itemsPerPage+startIndex)
   
     return(
        <div>
           <div>
             {currentItems.map((item,i)=> {
                return <li key={i}>{item}</li>
            })}
           </div>
            <button disabled={currentPage==1} onClick={()=> setCurrentPage((p)=> p-1)}>Previous</button>
            page {currentPage} of {totalPages}
            <button disabled={currentItems==totalPages} onClick={()=> setCurrentPage((p)=> p+1)}>Next</button>
        </div>
     )
}
export default Pagination;