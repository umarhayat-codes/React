import React, {useState} from 'react'

let initialState = {
    email : "",
    password : ""
}
export default function Signup() {
    const [state,setState] = useState(initialState)
    // const handleChange = (e) => {
    //     let {name,value} = e.target
    //     setState(s => {
    //         return {...s,[name] : value}
    //     })
    // }
    const handleChange = (e) => {
        setState(s => ({...s,[e.target.name] : e.target.value}))
    }
    const handleSubmit = () => {
        let {email,password} = state
        console.log('email :>> ', email);
        console.log('password :>> ', password);
        let data = {email ,password}
        console.log('date :>> ', data);
    }
  return (
    <>
     <div className="container">
        <div className="row">
            <div className="col text-center">
                <h3 className='mt-4'>Sign up</h3>
                <h5 className='mt-2'>Email:  {state.email} </h5>
                <h5 className='mt-2'>Password:  {state.password} </h5>
                <input type="email" name="email"  placeholder='Ente Your Email: ' className='form-control mt-2' onChange={handleChange}/>
                <input type="password" name="password"  placeholder='Ente Your password: ' className='form-control mt-2' onChange={handleChange}/>
                <button className='btn btn-primary mt-2' onClick={handleSubmit}>Sign Up</button>
            </div>
        </div>
     </div> 
    </>
  )
}
