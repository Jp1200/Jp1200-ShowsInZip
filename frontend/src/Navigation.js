import React from 'react';

export default class Navigation extends React.Component{



  render(){




    return(
      // Must add links to respective hrefs***
      <div>
        <nav>
          <ul>
            <li><a href="http://www.vrofi.com">HOME</a></li>
            <li><a href="http://www.vrofi.com">FIND SHOWS</a></li>
            <li> <a href="http://www.vrofi.com">PROFILE</a></li>
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
