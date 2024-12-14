import React from 'react'

export default function Footer() {
    let year = new Date().getFullYear()
  return (
    <div>
        <footer className='bg-primary py-1'>

        <div className='container'>        
            <div className='row'>
                <div className='col'>
                    <p className='text-center text-white mb-0'>{year}&copy;. All right reserve</p>
                    <p className='text-center text-white mb-0'>{year === 2024 ? "Your Year is correct" : "Please set date"} </p>
                </div>
            </div>
        </div>
        </footer>
      
    </div>
  )
}
