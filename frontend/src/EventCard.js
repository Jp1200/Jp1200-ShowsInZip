import React from 'react';

export default class EventCard extends React.Component{

  render(){
    return (
      <div>
        <p>
          {this.props.data}
        </p>
      </div>
    )
  }
}
