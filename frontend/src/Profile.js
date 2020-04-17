import React from 'react';
import { NavLink } from 'react-router-dom';
export default class Profile extends React.Component{

  render(){
    return(
      <div className='profile'>
        <NavLink
            to='/profile'
            >

        <center><img alt='profPic' src={this.props.profileData.picture? this.props.profileData.picture : 'https://www.google.com/search?q=random+png&rlz=1C5CHFA_enUS830FR857&sxsrf=ALeKk01BXU4jGn_jsdqwqxRiduruarh5lw:1587060099426&tbm=isch&source=iu&ictx=1&fir=1Sc3avbkjVqY8M%253A%252Co0hJf-VWy5HF8M%252C_&vet=1&usg=AI4_-kQlZtzO2PIN1klvzbcJCls2u8oL3g&sa=X&ved=2ahUKEwjdndrLw-3oAhVGaq0KHe9nCNsQ9QEwAHoECAoQIg#imgrc=E-q-Oj8GmHALpM&imgdii=oYee2Bb_Jl0O_M'}/>
        <section>{this.props.profileData.name}<br/>

        </section>
        </center>
        </NavLink>

      </div>
    )
  }


}
