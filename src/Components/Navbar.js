import React from 'react';
import {Link} from 'react-router-dom';
function Navbar(props) {
    return (
        <nav className="nav">
            <div className="left-nav">
              <Link to="/">
              <img
                src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
                alt="logo"
              />
              </Link>
            </div>
            <div className="search-container">
              <img
                className="search-icon "
                src="https://cdn-icons.flaticon.com/png/512/2801/premium/2801881.png?token=exp=1645538071~hmac=ebc8094db75dcbcaebddc7b9cb698216"
                alt="search-icn"
              />
              <input placeholder="Search" />
            </div>
            <div className="right-nav">
              <div className="user">
                <img 
                src="https://cdn-icons.flaticon.com/png/512/924/premium/924915.png?token=exp=1645509197~hmac=51659acae37605fe1e84f42c7dc138a1"
                alt="user-dp"
                id="user-dp"
                />
                <span>Harsh Soni</span>
              </div>
              <div className="nav-links">
                <ul>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Signup</Link></li>
                </ul>
              </div>
            </div>
          </nav>
    );
}

export default Navbar;