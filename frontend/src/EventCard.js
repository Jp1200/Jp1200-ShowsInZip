import React from 'react';

export default class EventCard extends React.Component{

  render(){
    return (

      <div className='event-card'>
        {console.log(this.props.data)}
        <p>Title: {this.props.data.title}</p>
        <p>Start-Time: {this.props.data.start}</p>
        <section>

          Venue: {(this.props.data.entities.length === 0) ? 'No Venue Found for this show' : this.props.data.entities[0].name }
          Address: {(this.props.data.entities.length ===0) ? 'No Address Found for this show' : this.props.data.entities[0].formatted_address }
        </section>
      </div>
    )
  }
}
