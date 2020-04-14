import React from 'react';
// import './singlePageTemplate.css';
export default class FindShows extends React.Component{
  state = {
    shows: [],
    search: ''
  }
  handleEventForm = ()=> {
    let aTokenPredictApi = 'utiLwEK0eWZiYEKna0e6Bg7nMI4RuCebW7wPE84L';
    let categories = '?category=concerts&label=music'
    let url = `https://api.predicthq.com/v1/events${categories}`;
    fetch(url,{
      headers: {
        "Authorization": `Bearer ${aTokenPredictApi}`,
          "Accept": "application/json"

      }
    })

    .then(resp=>resp.json())
    .then(json=>{
      this.setState({
        shows: json
      });



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
      <section className="about" id="about">
        <h2 className="hidden">About</h2>
        <form>
          <label for="birthday">Play Music for Bands playing on: </label>
          <input type="date" id="birthday" name="birthday" onChange={this.handleChange}/>
          <input type='submit' id='submit' name='submit' onClick={this.handleSubmit}/>
        </form>

      </section>
    )
  }
}
