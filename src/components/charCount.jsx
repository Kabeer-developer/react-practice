import { useEffect, useState } from "react";

function CharCount(){
    const [textArea,setTextArea] = useState("");
    const [message,setMessage] = useState("");

    const limit = 20;

    const charCount = textArea.replaceAll(" ","").length;
     
    
    
    
    // let str = "hello kabeer";
    // let r1 = str.replaceAll(" ","");
    // // console.log(r1);
    // let r2 = r1.split("");
    // // console.log(r2);
    // setCharCount(r2.length);
    // console.log(charCount);

    return(
        <div>
            <textarea className="textarea" onChange={(e)=> setTextArea(e.target.value)} ></textarea>
            <button onClick={()=> setMessage("Sumbitted")} disabled={charCount>limit}>Submit</button>
            {message}
           <p>Char count is {charCount} </p> 
           
           <p>{charCount} of {limit}</p>
        </div>
    )
}
export default CharCount;