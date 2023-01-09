import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <h1> My Daily Blogs</h1>
            <div className="links">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/create"> Create New Blogs</Link>
            </div>
        </nav>
    );
}

export default Navbar;