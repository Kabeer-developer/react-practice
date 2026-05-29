
function Props(props){
   return(
    (props.isLogged ? <h2>Welcome</h2> : <h2>Please Login</h2>)
   )
}

export default Props;