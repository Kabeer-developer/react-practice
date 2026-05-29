 
 function ListRender(){
    const list = [1,2,3,4];
    const render = list.map(l=> {
        return(<li key={l}>{l}</li>)
    })
    return(<ol>{render}</ol>);
 }

 export default ListRender;