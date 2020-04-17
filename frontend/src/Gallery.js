import React from 'react';


export default class Gallery extends React.Component{

  render(){
    return (
      <div>
      <div className="gallery">
        <div className="thumbnail">
          <h1 className="stats">1500</h1>
          <h4>TITLE</h4>
          <p>One line description</p>
        </div>
        <div className="thumbnail">
          <h1 className="stats">2300</h1>
          <h4>TITLE</h4>
          <p>One line description</p>
        </div>
        <div className="thumbnail">
          <h1 className="stats">7500</h1>
          <h4>TITLE</h4>
          <p>One line description</p>
        </div>
        <div className="thumbnail">
          <h1 className="stats">9870</h1>
          <h4>TITLE</h4>
          <p>One line description</p>
        </div>
      </div>
      {/* // <!-- Parallax Section --> */}
      <section className="banner">
        <h2 className="parallax">Currently only Seattle events are being Searched</h2>
        <p className="parallax_description">Currently working on getting more access vie Predict.HQ api and is merely a template before I have access to the Songkick Api.</p>
      </section>
      {/* // <!-- More Info Section --> */}
      <footer>
        <article className="footer_column">
          <h3>ABOUT</h3>
          <img src="./Vrofi logo V6.jpg" alt="" width="500" height="500" className="cards"/>
          <p>
            VroFi is a Web App primarily for finding shows in your city and allowing the user to listen to the bands at those shows through BandCamp™. We are currently using Predict.HQ™'s API to find shows only in Seattle, however, with proper permissions from SongKick™, we will be able to streamline the service to much more cities in the United States.
            Bandcamp™ is merely the beginning as having a Spotify API might be more useful or perhaps web scraping videos off of youtube instead of bandcamp iFrame album data. 
           </p>
        </article>
        <article className="footer_column">
          <h3>LOCATION</h3>
          <img src="./VroFi Logo V6.jpg" alt="" width="400" height="200" className="cards"/>
          <p>
            Currently located in Austin, Texas; the live music capital.
           </p>
        </article>
      </footer>
      {/* // <!-- Footer Section --> */}
      <section className="footer_banner" id="contact">
        <h2 className="hidden">Footer Banner Section </h2>
        <p className="hero_header">FOR THE LATEST NEWS &amp; UPDATES</p>
        <div className="button">subscribe</div>
      </section>
      {/* // <!-- Copyrights Section --> */}
      <div className="copyright">&copy;2020- <strong>VroFi LLC - Website by Jack P. and Nate Z.</strong></div>
      </div>
    )
  }
}
