import React from 'react';

export default function Button({color,text}) {
  return (
    <button className= {`btn btn-${color}`}>{text ? text : "button text not found"} </button>
    // <button className= {`btn btn-${color}`}>{text || "button text not found "} </button>
  )
}
// export default function Button(props) {
//     let {color,text} = props
//   return (
//     <button className= {`btn btn-${color}`}>{text} </button>
//   )
// }
// export default function Button(props) {
//   return (
//     <button className= {`btn btn-${props.color}`}>{props.text} </button>
//   )
// }


// Template literal

// let firstName = "umar"
// let lastName = "hayat"
// let fullName = "full name is " + firstName + " " + lastName
// Template literal
// let fullName = `full name is ${firstName} ${lastName}`
