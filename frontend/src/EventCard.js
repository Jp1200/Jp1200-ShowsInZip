import React from 'react';

export default class EventCard extends React.Component{

  handleEventCardClick = event => {
    event.preventDefault();

    console.log(this.props.data)
    let loc = (this.props.data.entities.length ===0) ? 'No Address Found for this show' : this.props.data.entities[0].formatted_address;
    let ven = (this.props.data.entities.length === 0) ? 'No Venue Found for this show' : this.props.data.entities[0].name;
    let tim = this.props.data.start;
    let titl = this.props.data.title;
    console.log(tim)
    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        title: `${titl}`,
        location: `${loc}`,
        venue: `${ven}`,
        showDate: `${tim}`
      })
    })

    // .then(resp=>{
    //   fetch('http://localhost:3000/bands', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*'
    //     },
    //     body: JSON.stringify({
    //
    //     })
    //   })
    // })
    .catch(error=>alert(error.messages))
}

  render(){
    return (

      <div
        onClick={this.handleEventCardClick}
        className='eventcard'>

        <p >Title: {this.props.data.title}</p>
        <p >Start-Time: {this.props.data.start}</p>
        <p >Venue: {(this.props.data.entities.length === 0) ? 'No Venue Found for this show' : this.props.data.entities[0].name }
        </p>
        <p>
          Address: {(this.props.data.entities.length ===0) ? 'No Address Found for this show' : this.props.data.entities[0].formatted_address }
        </p>
      </div>
    )
  }
}
