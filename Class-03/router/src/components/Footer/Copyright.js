import React from 'react'

export default function Copyright() {
    let year = new Date().getFullYear()
  return (
    <footer className='py-2 bg-primary'>
      <div className="container">
        <div className="row">
            <div className="col">
                <p className='mb-0 text-center text-white'>&copy; {year}. All right reserve.</p>
            </div>
        </div>
      </div>
    </footer>
  )
}
