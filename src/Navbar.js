import { Link } from "react-router-dom";

const  navbar= () => {
    return ( 
   
    <nav className="navbar">
      <h1>Benzina Sites</h1>
      <div className="links">
        <a to="/add_client" >Add Client</a>
      </div>
    </nav>
     );
}
 
export default navbar;