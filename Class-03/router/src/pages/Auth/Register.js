import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Setting() {
  const [state, setState] = useState({fullName : "",password : "", email: "" });
  const navigate = useNavigate();

  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();

    const { email, fullName, password } = state;
    if (!email || !fullName || !password) {
      alert("Enter All Field: ")
      return
    }
    

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      alert("User already exists!");
      return;
    }

    users.push({ email, fullName, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    navigate("/auth/login");
  };

  return (
    <main className='auth py-5'>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card border-none mx-auto p-3 p-md-4" style={{ maxWidth: 400 }}>
              <h2 className="text-primary text-center mb-4">Register</h2>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 mb-4">
                    <input type="text" className='form-control' placeholder='Enter Your Name' name='fullName' onChange={handleChange} />
                  </div>
                  <div className="col-12 mb-4">
                    <input type="email" className='form-control' placeholder='Enter email' name='email' onChange={handleChange} />
                  </div>
                  <div className="col-12 mb-4">
                    <input type="password" className='form-control' placeholder='Enter password' name='password' onChange={handleChange} />
                  </div>
                  <div className="col-12">
                    <button className='btn btn-primary w-100'>Register</button>
                    <p className='mb-0 mt-2'>Already have an account? <Link to="/auth/login">Login Now</Link></p>
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
