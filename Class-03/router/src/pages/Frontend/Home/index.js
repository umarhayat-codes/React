import React, { useContext, useState } from 'react';
import fontFamilies from '../../../data/fontfamillies.json';
import { AuthContext } from '../../../contexts/AuthContext';

export default function Home() {
  const {  user } = useContext(AuthContext);
  const [color, setColor] = useState("");
  const [font, setFont] = useState('');

  return (
    <main className='py-5' style={{ background: color }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='text-center' style={{ fontFamily: font }}>Home</h1>
            <input type="color" onChange={e => setColor(e.target.value)} />
            <select onChange={e => setFont(e.target.value)}>
              {fontFamilies.map((fontFamily, i) => (
                <option key={i} value={fontFamily.name}>{fontFamily.name}</option>
              ))}
            </select>
            {/* {isAuthenticated && user ? (
              <h1>Welcome, {user.email}</h1>
            ) : (
              <h1>Please log in</h1>
            )} */}
            {/* <h1>{isAuthenticated.toString()} </h1> */}
            <h1>{user.email} </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
