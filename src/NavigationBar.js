import { Outlet, Link } from "react-router-dom";

function NavigationBar(){
    return(
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "#e3f2fd"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img style={{height: 40, width: 130}} src="images/logo.png" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>        
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        <Outlet></Outlet>
        </>
    );
}

export default NavigationBar