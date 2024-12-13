import React from 'react'

export default function Button(props) {
    const {type,text,size} = props
  return (
    <>
     {/* <button className={`btn btn-${type || "primary"} ${size ? "btn-" + size : ""}`}>{text || "This is button"} </button>  */}
     {/* <button className={`btn btn-${type || "primary"} ${size && "btn-" + size}`}>{text || "This is button"} </button>  */}
    </>
  )
}
