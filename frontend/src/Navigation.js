import React from 'react';

import { NavLink } from 'react-router-dom';
export default class Navigation extends React.Component{



  render(){




    return(
      // Must add links to respective hrefs***
      <div>
        <nav>
          <ul>
            <li><NavLink
              to="/"
              > HOME
            </NavLink>
            </li>
            <li><NavLink to='/find'>FIND SHOWS</NavLink></li>
            <li><NavLink
              to='/profile'
              >PROFILE

            </NavLink></li>
          </ul>
        </nav>


      <section className="hero" id="hero">
        <h2 className="hero_header">VroFi <span className="light">Music</span></h2>
        <p className="tagline">Live music in your city</p>
      </section>



      </div>
    )
  }
}
