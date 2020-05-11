import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <div className="ui secondary menu" style={{ borderBottom: 'black 1px solid'}}> 
        <ul style={{ display: 'flex'}}> 
            <li className="item">
                <Link to='/'> Home </Link>
            </li>
            <li className="item">
                <Link to='/poll/new'> Create New Poll </Link>
            </li>
        </ul>
    </div>
);

export default NavBar;