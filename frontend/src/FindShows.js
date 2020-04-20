import React from 'react';
// import './singlePageTemplate.css';
import EventCard from './EventCard.js'

export default class FindShows extends React.Component{
  state = {
    shows: [],
    search: ''
  }

  handleEventForm = ()=> {
    let aTokenPredictApi = 'utiLwEK0eWZiYEKna0e6Bg7nMI4RuCebW7wPE84L';
    let categories = '?category=concerts&label=music';
    let startAround = (this.state.search === '') ? '' : `&start_around.origin=${this.state.search}`;
    let url = `https://api.predicthq.com/v1/events${categories+startAround}`;
    fetch(url,{
      headers: {
        "Authorization": `Bearer ${aTokenPredictApi}`,
          "Accept": "application/json"

      }
    })

    .then(resp=>resp.json())
    .then(json=>{
      this.setState({
        shows: json.results
      });
      // this.handleCards(this.state.shows)



    })
  }

  handleChange = event=> {
    this.setState({
      search: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    this.handleEventForm();
  }




  render(){


    return(
      <section className="" id="">
        <h2 className="hidden">About</h2>
        <form>
          <label htmlFor="birthday">Find Music around this date: </label>
          <input type="date" id="birthday" name="birthday" onChange={this.handleChange}/>
          <input type='submit' id='submit' name='submit' onClick={this.handleSubmit}/>
        </form>

          { this.state.shows.map((event,key)=>


             <EventCard data={event} key={key} />)}

      </section>
    )
  }
}
