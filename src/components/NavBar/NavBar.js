import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-removebg-preview.png'

const NavBar = () => {

    const menuItems =
        <React.Fragment>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/categories'>Categories</Link></li>
            <li><Link to='/login'>Login</Link></li>

        </React.Fragment>

    return (
        <div className="navbar bg-gray-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><span><img style={{ width: "40px" }} src={logo} alt="" srcset="" /></span>Phone Planet</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;