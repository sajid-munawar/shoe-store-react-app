import {Link, link} from "react-router-dom";

function NavBar() {
    return (
      <div >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </div>
    );
  }
  
  export default NavBar;