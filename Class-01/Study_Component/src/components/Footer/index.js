import React from 'react'

export default function Footer() {
    let year = new Date().getFullYear()
  return (
    <div>
      <footer className='bg-primary py-2'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="text-center text-white mb-0">&copy; {year}. All right reserve</p>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}
