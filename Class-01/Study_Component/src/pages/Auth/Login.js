import React , {useState} from "react"
// let initialState = {
//   model : "honda",
//   year : "2020",
//   color : "red",
//   brand : "mustag"
// }
let initialState = {
  email : "",
  password : ""
}
export default function Login() {
  const [state,setState] = useState(initialState)
  // const {model,year,color,brand} = state
  const {email,password} = state
  // const updateState = () => {
  //   setState(previousState => {
  //     return {...previousState, color : "blue"}
  //   })
  // }

  const handleChange = e => {
    // console.log('e :>> ', e.target.value);

    // console.log('e :>> ', e.target.name);
    setState(s => {return {...s,[e.target.name] : e.target.value}})
  }
  return (
    <div>
      <div className="container py-5">
        <div className="row">
            <div className="col text-center">
                {/* <h3>My {brand} </h3>
                <p>it is {model} {color} from {year} </p>
                <button className="btn btn-primary" onClick={updateState}>update State</button> */}
                <h3 style={{textAlign : "center"}}>Login</h3>
                <h3>Email : {email}</h3>
                <h3>Password:  {password}</h3>
                <input type="email" name="email" placeholder='Enter Your Email: ' className="form-control mt-2" onChange={handleChange}/>
                <input type="password" name="password" placeholder='Enter Your Password: ' className="form-control mt-2" onChange={handleChange}/>
                <button className="btn btn-primary" ></button> 

            </div>
        </div>
      </div>
    </div>
  )
}
