import React from 'react'

export const Card = (props) => {
console.log(props.datepost)

  return (
    <div className="parent">


<div className="header">
<img src={props.logo} alt="" />
<div className="savebtn">
  Save
</div>
</div>


<div className="main">
<div className="nametime">
  <span className='company'>{props.company}</span>
  <span className='time'>{props.datepost}</span>
</div>

<div className="post">
  {props.post}
</div>
<div className="twobtn">
  <span className='btn1'>{props.tag11}</span>
  <span className='btn2'>{props.tag22}</span>
</div>

</div>


<div className="line"></div>


<div className="footer">


  <div className="charadd">
<div className="charge">
  ${props.paying}
</div>
<div className="address">
  {props.location}
</div>
</div>
<button>
  Apply now
</button>

</div>

    </div>
  )
}
export default Card;