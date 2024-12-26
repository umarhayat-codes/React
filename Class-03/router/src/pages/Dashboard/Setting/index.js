import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

export default function Setting() {
  const { user, dispatch } = useContext(AuthContext);
  const [state, setState] = useState({ fullName: user.fullName, email: user.email });

  useEffect(() => {
    setState({ fullName: user.fullName, email: user.email });
  }, [user]);

  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const { email, fullName } = state;
    if (!email || !fullName) {
      alert("Enter All Fields");
      return;
    }

    dispatch({ type: "SET_PROFILE", payload: { email, fullName } });
  };

  return (
    <main className='auth py-5'>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card border-none mx-auto p-3 p-md-4" style={{ maxWidth: 400 }}>
              <h2 className="text-primary text-center mb-4">Update Profile</h2>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 mb-4">
                    <input
                      type="text"
                      className='form-control'
                      placeholder='Enter Your Name'
                      name='fullName'
                      value={state.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <input
                      type="email"
                      className='form-control'
                      placeholder='Enter email'
                      name='email'
                      value={state.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <button className='btn btn-primary w-100'>Update</button>
                    <p className='mb-0 mt-2'>Changed your mind? </p>
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
