import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from 'bootstrap'

const Navbar = ({search,setSearch}) => {

    const removeToken = () => {
        if (localStorage.getItem("token")) {
          localStorage.removeItem("token");
          alert("Log out Successfully");
          window.location.href="/Home"
        } else {
          alert("You are not logged in yet.");
        }
      };
      



    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> WROXO</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/"></NavLink>
                        </li>
                        <div className="input-group mb-3">
  <input
    type="text"
    className="form-control"
    placeholder="Search for products"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">
      Search Here
    </button>
  </div>
</div>

                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li> */}
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li> */}
                    </ul>
                    <div className="buttons text-center">
                        {/* <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink> */}
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                        <button to="/login" className="btn btn-outline-dark m-2"  onClick={removeToken} ><i className="fa fa-sign-in-alt mr-2"></i> Logout</button>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar