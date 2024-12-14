import React from 'react';
import Button from './Button';

export default function Main(props) {
  const handleSubmit = (param) => {
    alert(param);
  }

  return (
    <div>
      <div className='container'>        
        <div className='row'>
          <div className='col'>
            <h2 className='text-center'>Home</h2>
            <h2 className='text-center'>Welcome to {props.fullName}</h2>
            <h2 className='text-center'>We are live in {props.city}</h2>
            <hr/>
            <div className='d-flex justify-content-between mb-5'>
              <button className='btn btn-primary' onClick={()=> {handleSubmit("Umar Hayat")}}>Click Me</button>
              <Button color='primary' text="button 1" />
              <Button color='secondary' text="button 2" />
              <Button color='success' text="button 3" />
              <Button color='danger' text="button 4" />
              <Button color='light' text="button 5" />
              <Button color='dark' text="button 6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
