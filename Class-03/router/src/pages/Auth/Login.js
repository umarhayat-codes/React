// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthContext';

// export default function Login() {
//   const { setAuthState, isAuthenticated,users } = useContext(AuthContext);
//   const [state, setState] = useState({ email: "", password: "" });
//   const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }));
//   const navigate = useNavigate();

//   const handleSubmit = e => {
//     e.preventDefault();

//     let { email, password } = state;

//     console.log("email", email);
//     console.log("password", password);

//     const users = JSON.parse(localStorage.getItem("users")) || []
//     const user = users.find(e => e.email === email)
//     if (user) {
//       setAuthState({isAuthenticated : true, user})
//       localStorage.setItem("isAuthenticated", 'true')
//       localStorage.setItem("user",JSON.stringify(user))
//     }
//     // const user = setIsAuthenticated({isAuthenticated : true, user}) 
//     // const formData = { email, password };
//     // console.log("formData", formData);

//     // Simulating user login, replace with actual login logic
//     // setUser({ email });
//     // setIsAuthenticated(true);
//     navigate("/");
//   };

//   return (
//     <main className='auth py-5'>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <div className="card border-none mx-auto p-3 p-md-4" style={{ maxWidth: 400 }}>
//               <h2 className="text-primary text-center mb-4">Login</h2>

//               <form onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col-12 mb-4">
//                     <input type="email" className='form-control' placeholder='Enter email' name='email' onChange={handleChange} />
//                   </div>
//                   <div className="col-12 mb-4">
//                     <input type="password" className='form-control' placeholder='Enter password' name='password' onChange={handleChange} />
//                   </div>
//                   <div className="col-12">
//                     <button className='btn btn-primary w-100'>Login</button>
//                     <p className='mb-0 mt-2'>Don't have an account? <Link to="/auth/register">Register Now</Link></p>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }





import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function Login() {
  // const { setAuthState } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  const [state, setState] = useState({ email: "", password: "" });
  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }));
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    let { email, password } = state;
    if (!email ||  !password) {
      alert("Enter All Field: ")
      return
    }
    const users = JSON.parse(localStorage.getItem("users")) || []
    const user = users.find(e => e.email === email && e.password === password);
    if (user) {
      // setAuthState({ isAuthenticated: true, user });
      dispatch({type : "SET_LOG_IN", payload : user})
      localStorage.setItem("isAuthenticated", 'true');
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <main className='auth py-5'>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card border-none mx-auto p-3 p-md-4" style={{ maxWidth: 400 }}>
              <h2 className="text-primary text-center mb-4">Login</h2>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 mb-4">
                    <input type="email" className='form-control' placeholder='Enter email' name='email' onChange={handleChange} />
                  </div>
                  <div className="col-12 mb-4">
                    <input type="password" className='form-control' placeholder='Enter password' name='password' onChange={handleChange} />
                  </div>
                  <div className="col-12">
                    <button className='btn btn-primary w-100'>Login</button>
                    <p className='mb-0 mt-2'>Don't have an account? <Link to="/auth/register">Register Now</Link></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
