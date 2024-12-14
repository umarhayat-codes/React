import React from 'react';

export default function Contact(props) {
  let fullName = ""
  let city = ""
  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Form Submitted")
    console.log('fullName :>> ', fullName);
    console.log('city :>> ', city);
  }
  return (
    <div>
      <div className='container'>        
        <div className='row'>
          <div className='col'>
            <h2 className='text-center'>Contact Us</h2>
            <hr/>
            <div className='card mx-auto p-4' style={{maxWidth : 600}}>

                <form onSubmit={handleSubmit}>
                    <div className='row'>
                    <div className='col-12 col-md-6'>
                        <input type='text' className='form-control' placeholder='Enter Your Name: ' name='fullName' onChange={(e) => {fullName = e.target.value}} />
                        
                    </div>
                    <div className='col-12 col-md-6'>
                        <input type='text' className='form-control' placeholder='Enter Your city: ' name='city' onChange={(e) => {city = e.target.value}}/>
                    </div>
                    <div className='col'>
                      <button className='btn btn-primary w-100' type='submit'>Submitted</button>
                    </div>
                    </div>
                </form>
                    
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
